package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.Subject;
import com.br.motorola.wlms.repository.SubjectRepository;

@Service
public class SubjectService implements ICrudService<Subject> {

    private final SubjectRepository repo;
    private final TrainingService serviceTraining;
    private final TeacherService serviceTeacher;

    @Autowired
    public SubjectService(
        SubjectRepository repo,
        TrainingService serviceTraining,
        TeacherService serviceTeacher
    ){
        this.repo = repo;
        this.serviceTraining = serviceTraining;
        this.serviceTeacher = serviceTeacher;
    }
    
    @Override
    public List<Subject> getAll() {
        return repo.findAll();
    }

    @Override
    public Subject getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Subject> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca); 
    }
    public Subject getCurrentSubject(Long id) {
        return repo.findCurrentSubject(id);
    }
    public List<Subject> getSubjectTeacher(Long id){
        return repo.findSubjectTeacher(id);
    }
    @Override
    public Subject save(Subject objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }
    
}
