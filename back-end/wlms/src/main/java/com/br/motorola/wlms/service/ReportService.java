package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.EStatusReport;
import com.br.motorola.wlms.model.Report;
import com.br.motorola.wlms.repository.ReportRepository;

@Service
public class ReportService implements ICrudService<Report> {

    private final ReportRepository repo;
    private final TypeReportService serviceTypeReport;
    private final UserService serviceUser;
    private final TemplateReportService serviceTemplate;

    @Autowired
    public ReportService(
        ReportRepository repo,
        TypeReportService serviceTypeReport,
        UserService serviceUser,
        TemplateReportService serviceTemplate
    ){
        this.repo = repo;
        this.serviceTypeReport = serviceTypeReport;
        this.serviceUser = serviceUser;
        this.serviceTemplate = serviceTemplate;
    }

    @Override
    public List<Report> getAll() {
        return repo.findAll();
    }

    @Override
    public Report getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Report> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public Report save(Report objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }
    public void arquivar(Long id){
        Report registro = repo.findById(id).orElse(null);
        registro.setReport_status(EStatusReport.ARQUIVADO);
        repo.save(registro);
    }
    public Report nextStatus(Long id) {
        Report registro = repo.findById(id).orElse(null);
        registro.setReport_status(registro.getReport_status().next());
        repo.save(registro);
        return registro;
    }
    public Report previousStatus(Long id) {
        Report registro = repo.findById(id).orElse(null);
        registro.setReport_status(registro.getReport_status().previous());
        repo.save(registro);
        return registro;
    }
    
}
