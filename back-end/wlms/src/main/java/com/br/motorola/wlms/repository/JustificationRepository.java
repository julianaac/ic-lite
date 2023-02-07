package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.Justification;

public interface JustificationRepository extends JpaRepository<Justification, Long> {
    @Query(
        "SELECT j FROM Justification j"+
        " LEFT JOIN Student s ON s.student_id = j.student" +
        " LEFT JOIN User u ON u.user_id = s.user" +
        " WHERE u.user_name LIKE %?1%"
    )
    List<Justification> findByAll(String nome);
}
