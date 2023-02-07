package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.TypeTechnology;
import com.br.motorola.wlms.repository.TypeTechnologyRepository;

@Service
public class TypeTechnologyService implements ICrudService<TypeTechnology> {

    private final TypeTechnologyRepository repo;

    @Autowired
    public TypeTechnologyService(TypeTechnologyRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<TypeTechnology> getAll() {
        return repo.findAll();
    }

    @Override
    public TypeTechnology getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<TypeTechnology> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public TypeTechnology save(TypeTechnology objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        TypeTechnology record = repo.findById(id).orElse(null);
        repo.save(record);     
    }
    
}
