package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.Laboratory;
import com.br.motorola.wlms.repository.LaboratoryRepository;


@Service
public class LaboratoryService implements ICrudService<Laboratory> {
    private final LaboratoryRepository repo;

    @Autowired
    public LaboratoryService(LaboratoryRepository repo){
        this.repo = repo;
    }
    @Override
    public List<Laboratory> getAll() {
        return repo.findAll();
    }

    @Override
    public Laboratory getById(Long id) {
        
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Laboratory> getByAll(String termoBusca) {
        
        return repo.findByAll(termoBusca);
    }

    @Override
    public Laboratory save(Laboratory objeto) {
        
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }
    
}
