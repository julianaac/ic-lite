package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.TypeTask;
import com.br.motorola.wlms.repository.TypeTaskRepository;


@Service
public class TypeTaskService implements ICrudService<TypeTask> {
    private final TypeTaskRepository repo;

    @Autowired
    public TypeTaskService(TypeTaskRepository repo){
        this.repo = repo;
    }
    @Override
    public List<TypeTask> getAll() {
        return repo.findAll();
    }

    @Override
    public TypeTask getById(Long id) {
        
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<TypeTask> getByAll(String termoBusca) {
        
        return repo.findByAll(termoBusca);
    }

    @Override
    public TypeTask save(TypeTask objeto) {
        
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }
    
}
