package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.StudentEvaluation;

public interface StudentEvaluationRepository extends JpaRepository<StudentEvaluation, Long>{
    @Query("SELECT se FROM StudentEvaluation se" +
        " LEFT JOIN Subject s ON s.subject_id = se.subject" +
        " LEFT JOIN Student st ON st.student_id = se.student" +
        " LEFT JOIN User u ON u.user_id = st.user" +
        " WHERE s.subject_name LIKE %?1%" +
        " OR u.user_name LIKE %?1%" +
        " OR se.student_evaluation_is_answer LIKE %?1%")
    List<StudentEvaluation> findByAll(String nome);
}
