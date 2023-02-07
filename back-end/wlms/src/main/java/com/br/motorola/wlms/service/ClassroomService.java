package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.Classroom;
import com.br.motorola.wlms.repository.ClassroomRepository;

@Service
public class ClassroomService implements ICrudService<Classroom> {

    private final ClassroomRepository repo;
    private final TrainingService serviceTraining;
    private final LaboratoryService serviceLaboratory;


    @Autowired
    public ClassroomService(
        ClassroomRepository repo,
        TrainingService serviceTraining,
        LaboratoryService serviceLaboratory
    ){
        this.repo = repo;
        this.serviceTraining = serviceTraining;
        this.serviceLaboratory = serviceLaboratory;
    }

    @Override
    public List<Classroom> getAll() {
        return repo.findAll();
    }

    @Override
    public Classroom getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Classroom> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public Classroom save(Classroom objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
       
    }
    
}
