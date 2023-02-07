package com.br.motorola.wlms.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.Subject;
public interface SubjectRepository extends JpaRepository<Subject, Long>{
@Query("SELECT s FROM Subject s" +
    " WHERE s.subject_name LIKE %?1%" +
    " OR s.subject_workload LIKE %?1%")
    List<Subject> findByAll(String nome);

@Query("SELECT s FROM Subject s" +
    " LEFT JOIN Student st ON st.classroom = s.classroom" +
    " LEFT JOIN User u ON u.user_id = st.user" +
    " WHERE s.subject_start_date < CURRENT_DATE" +
    " AND  s.subject_end_date > CURRENT_DATE"+
    " AND u.user_id = ?1")
    Subject findCurrentSubject(Long id);
@Query("SELECT s FROM Subject s" +
    " LEFT JOIN Teacher t ON t.teacher_id = s.teacher" +
    " LEFT JOIN User u ON u.user_id = t.user" +
    " WHERE s.subject_start_date < CURRENT_DATE" +
    " AND  s.subject_end_date > CURRENT_DATE"+
    " AND u.user_id = ?1")
    List<Subject> findSubjectTeacher(Long id);
// seria interessante pesquisar por professor

}
