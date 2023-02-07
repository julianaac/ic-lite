package com.br.motorola.wlms.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.br.motorola.wlms.model.Absence;

public interface AbsenceRepository extends JpaRepository<Absence, Long>{
    @Query("SELECT a FROM Absence a" +
        " LEFT JOIN Subject s ON s.subject_id = a.subject" +
        " LEFT JOIN Student st ON st.student_id = a.student" +
        " LEFT JOIN User u ON u.user_id = st.user" +
        " WHERE s.subject_name LIKE %?1%" +
        " OR u.user_name LIKE %?1%" +
        " OR a.absence_date LIKE %?1%")
    List<Absence> findByAll(String nome);
}
