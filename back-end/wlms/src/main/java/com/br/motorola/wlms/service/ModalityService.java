package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.Modality;
import com.br.motorola.wlms.repository.ModalityRepository;


@Service
public class ModalityService implements ICrudService<Modality> {
    private final ModalityRepository repo;

    @Autowired
    public ModalityService(ModalityRepository repo){
        this.repo = repo;
    }
    @Override
    public List<Modality> getAll() {
        return repo.findAll();
    }

    @Override
    public Modality getById(Long id) {
        
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Modality> getByAll(String termoBusca) {
        
        return repo.findByAll(termoBusca);
    }

    @Override
    public Modality save(Modality objeto) {
        
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }
    
}
