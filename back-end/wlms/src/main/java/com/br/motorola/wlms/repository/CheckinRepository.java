package com.br.motorola.wlms.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.br.motorola.wlms.model.Checkin;

public interface CheckinRepository extends JpaRepository<Checkin, Long>{
    @Query("SELECT c FROM Checkin c" +
        " LEFT JOIN Classroom cl ON cl.classroom_id = c.classroom" +
        " LEFT JOIN Subject s ON s.subject_id = c.subject" +
        " LEFT JOIN Student st ON st.student_id = c.student" +
        " LEFT JOIN User u ON u.user_id = st.user" +
        " WHERE cl.classroom_name LIKE %?1%" +
        " OR s.subject_name LIKE %?1%" +
        " OR u.user_name LIKE %?1%")
    List<Checkin> findByAll(String nome);
    @Query("SELECT c FROM Checkin c" +
    " LEFT JOIN Classroom cl ON cl.classroom_id = c.classroom" +
    " LEFT JOIN Subject s ON s.subject_id = c.subject" +
    " LEFT JOIN Student st ON st.student_id = c.student" +
    " LEFT JOIN User u ON u.user_id = st.user" +
    " WHERE u.user_id = ?1")
List<Checkin> findCheckinCurrent(Long id);
// função para otimizar o checkin
// @Query(value = "SELECT * FROM Checkin WHERE DATE(checkin_entry) = CURDATE() AND checkin_student_fk = ?1", nativeQuery = true)
// Checkin findCheckinCurrentDate(Long id);

}
