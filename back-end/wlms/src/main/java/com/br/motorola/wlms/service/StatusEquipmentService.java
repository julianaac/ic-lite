package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.StatusEquipment;
import com.br.motorola.wlms.repository.StatusEquipmentRepository;

@Service
public class StatusEquipmentService implements ICrudService<StatusEquipment> {

    private final StatusEquipmentRepository repo;

    @Autowired
    public StatusEquipmentService(StatusEquipmentRepository repo){
        this.repo = repo;
    }

    @Override
    public List<StatusEquipment> getAll() {
        return repo.findAll();
    }

    @Override
    public StatusEquipment getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<StatusEquipment> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public StatusEquipment save(StatusEquipment objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }


}
