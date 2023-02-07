package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.RecordClass;
import com.br.motorola.wlms.repository.RecordClassRepository;

@Service
public class RecordClassService implements ICrudService<RecordClass> {

    private final RecordClassRepository repo;
    private final ClassroomService serviceClassroom;
    private final SubjectService serviceSubject;

    @Autowired
    public RecordClassService(
        RecordClassRepository repo,
        ClassroomService serviceClassroom,
        SubjectService serviceSubject
    ){
        this.repo = repo;
        this.serviceClassroom = serviceClassroom;
        this.serviceSubject = serviceSubject;
    }

    @Override
    public List<RecordClass> getAll() {
        return repo.findAll();
    }

    @Override
    public RecordClass getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<RecordClass> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public RecordClass save(RecordClass objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }
    
}
