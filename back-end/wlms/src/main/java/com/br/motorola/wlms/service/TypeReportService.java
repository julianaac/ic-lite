package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.TypeReport;
import com.br.motorola.wlms.repository.TypeReportRepository;


@Service
public class TypeReportService implements ICrudService<TypeReport> {
    private final TypeReportRepository repo;

    @Autowired
    public TypeReportService(TypeReportRepository repo){
        this.repo = repo;
    }
    @Override
    public List<TypeReport> getAll() {
        return repo.findAll();
    }

    @Override
    public TypeReport getById(Long id) {
        
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<TypeReport> getByAll(String termoBusca) {
        
        return repo.findByAll(termoBusca);
    }

    @Override
    public TypeReport save(TypeReport objeto) {
        
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }
    
}
