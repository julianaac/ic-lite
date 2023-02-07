package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.TemplateReport;
import com.br.motorola.wlms.repository.TemplateReportRepository;

@Service
public class TemplateReportService implements ICrudService<TemplateReport>{

    private final TemplateReportRepository repo;
    private final TypeReportService serviceTypeReport;
    private final UserService serviceUser;

    public TemplateReportService(
        TemplateReportRepository repo,
        TypeReportService serviceTypeReport,
        UserService serviceUser
    ){
        this.repo = repo;
        this.serviceTypeReport = serviceTypeReport;
        this.serviceUser = serviceUser;
    }

    @Override
    public List<TemplateReport> getAll() {
        return repo.findAll();
    }

    @Override
    public TemplateReport getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<TemplateReport> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public TemplateReport save(TemplateReport objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }
    
}
