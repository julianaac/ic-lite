package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.TemplateReport;

public interface TemplateReportRepository extends JpaRepository<TemplateReport, Long>{
@Query("SELECT tr FROM TemplateReport tr" +
    " LEFT JOIN TypeReport trt ON trt.type_report_id = tr.typeReport" +
    " WHERE tr.template_report_name LIKE %?1%" +
    " OR tr.template_report_instituition LIKE %?1%" +
    " OR trt.type_report_name LIKE %?1%")
List<TemplateReport> findByAll(String nome);

}
