package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.TechnicalKnowledge;
import com.br.motorola.wlms.repository.TechnicalKnowledgeRepository;


@Service
public class TechnicalKnowledgeService implements ICrudService<TechnicalKnowledge> {
    private final TechnicalKnowledgeRepository repo;

    @Autowired
    public TechnicalKnowledgeService(TechnicalKnowledgeRepository repo){
        this.repo = repo;
    }
    @Override
    public List<TechnicalKnowledge> getAll() {
        return repo.findAll();
    }

    @Override
    public TechnicalKnowledge getById(Long id) {
        
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<TechnicalKnowledge> getByAll(String termoBusca) {
        
        return repo.findByAll(termoBusca);
    }

    @Override
    public TechnicalKnowledge save(TechnicalKnowledge objeto) {
        
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }
    
}
