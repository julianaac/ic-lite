package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.Training;
import com.br.motorola.wlms.repository.TrainingRepository;

@Service
public class TrainingService implements ICrudService<Training> {

    private final TrainingRepository repo;
    private final UserService serviceUser;

    @Autowired
    public TrainingService(
        TrainingRepository repo,
        UserService serviceUser
    ){
        this.repo = repo;
        this.serviceUser = serviceUser;
    }

    @Override
    public List<Training> getAll() {
        return repo.findAll();
    }

    @Override
    public Training getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Training> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public Training save(Training objeto) {    
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
           
    }
    
}
