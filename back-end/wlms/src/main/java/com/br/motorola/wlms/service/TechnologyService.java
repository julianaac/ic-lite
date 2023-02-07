package com.br.motorola.wlms.service;
import com.br.motorola.wlms.model.Technology;
import com.br.motorola.wlms.model.TypeTechnology;
import com.br.motorola.wlms.repository.TechnologyRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TechnologyService implements ICrudService<Technology>{

    private final TechnologyRepository repo;
    private final TypeTechnologyService typeTechnologyService;

    @Autowired
    public TechnologyService(
        TechnologyRepository repo,
        TypeTechnologyService typeTechnologyService
    ){
        this.repo = repo;
        this.typeTechnologyService = typeTechnologyService;

    }

    @Override
    public List<Technology> getAll() {
        return repo.findAll();
    }

    @Override
    public Technology getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Technology> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public Technology save(Technology objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }
}
