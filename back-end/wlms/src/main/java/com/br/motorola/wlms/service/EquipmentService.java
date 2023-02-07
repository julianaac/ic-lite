package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.Equipment;
import com.br.motorola.wlms.repository.EquipmentRepository;

@Service
public class EquipmentService implements ICrudService<Equipment>{

    private final EquipmentRepository repo;
    private final StatusEquipmentService serviceStatusEquipment;
    private final TrainingService serviceTraining;

    public EquipmentService(
        EquipmentRepository repo,
        StatusEquipmentService serviceStatusEquipment,
        TrainingService serviceTraining
    ){
        this.repo = repo;
        this.serviceStatusEquipment = serviceStatusEquipment;
        this.serviceTraining = serviceTraining;
    }
    
    @Override
    public List<Equipment> getAll() {
        return repo.findAll();
    }

    @Override
    public Equipment getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Equipment> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public Equipment save(Equipment objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
   
    }
    
}
