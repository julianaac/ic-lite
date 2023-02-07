package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.Situation;
import com.br.motorola.wlms.repository.SituationRepository;

@Service
public class SituationService implements ICrudService<Situation> {
    private final SituationRepository repo;

    @Autowired
    public SituationService(SituationRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<Situation> getAll() {
        return repo.findAll();
    }

    @Override
    public Situation getById(Long id) {

        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Situation> getByAll(String termoBusca) {

        return repo.findByAll(termoBusca);
    }

    @Override
    public Situation save(Situation objeto) {

        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }

}
