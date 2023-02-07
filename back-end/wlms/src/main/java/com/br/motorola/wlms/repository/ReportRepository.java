package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.Report;

public interface ReportRepository extends JpaRepository<Report, Long> {
    @Query(
        "SELECT r FROM Report r"+
        " LEFT JOIN User u ON u.user_id = r.user" +
        " WHERE u.user_name LIKE %?1%"
    )
    List<Report> findByAll(String nome);
}
