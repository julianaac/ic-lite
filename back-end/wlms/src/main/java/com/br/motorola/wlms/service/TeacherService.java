package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.Teacher;
import com.br.motorola.wlms.repository.TeacherRepository;

@Service
public class TeacherService implements ICrudService<Teacher> {

    private final TeacherRepository repo;
    private final TrainingService serviceTraining;
    private final UserService serviceUser;

    @Autowired
    public TeacherService(
        TeacherRepository repo,
        TrainingService serviceTraining,
        UserService serviceUser
    ){
        this.repo = repo;
        this.serviceTraining = serviceTraining;
        this.serviceUser = serviceUser;
    }

    @Override
    public List<Teacher> getAll() {
        return repo.findAll();
    }

    @Override
    public Teacher getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Teacher> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public Teacher save(Teacher objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
                
    }
    
}
