package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.br.motorola.wlms.model.TypeReport;

public interface TypeReportRepository extends JpaRepository<TypeReport, Long> {
    @Query(
        "SELECT tr FROM TypeReport tr WHERE tr.type_report_name LIKE %?1%"
    )
    List<TypeReport> findByAll(String nome);
}
