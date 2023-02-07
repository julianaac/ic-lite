package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.EquipmentLocation;
import com.br.motorola.wlms.repository.EquipmentLocationRepository;

@Service
public class EquipmentLocationService implements ICrudService<EquipmentLocation>{

    private final EquipmentLocationRepository repo;
    private final StudentService serviceStudent;
    private final EquipmentService serviceEquipment;
    private final LaboratoryService serviceLaboratory;
    private final TrainingService serviceTraining;
    private final ClassroomService serviceClassroom;

    @Autowired
    public EquipmentLocationService(
        EquipmentLocationRepository repo,
        StudentService serviceStudent,
        EquipmentService serviceEquipment,
        LaboratoryService serviceLaboratory,
        TrainingService serviceTraining,
        ClassroomService serviceClassroom
    ){
        this.repo = repo;
        this.serviceStudent = serviceStudent;
        this.serviceEquipment = serviceEquipment;
        this.serviceLaboratory = serviceLaboratory;
        this.serviceTraining = serviceTraining;
        this.serviceClassroom = serviceClassroom;
    }

    @Override
    public List<EquipmentLocation> getAll() {
        return repo.findAll();
    }

    @Override
    public EquipmentLocation getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<EquipmentLocation> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public EquipmentLocation save(EquipmentLocation objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }
    
}
