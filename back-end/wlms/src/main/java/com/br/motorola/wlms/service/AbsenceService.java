package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.Absence;
import com.br.motorola.wlms.repository.AbsenceRepository;

@Service
public class AbsenceService implements ICrudService<Absence>{

    private final AbsenceRepository repo;
    private final StudentService serviceStudent;
    private final SubjectService serviceSubject;

    @Autowired
    public AbsenceService(
        AbsenceRepository repo,
        StudentService serviceStudent,
        SubjectService serviceSubject
    ){
        this.repo = repo;
        this.serviceStudent = serviceStudent;
        this.serviceSubject = serviceSubject;
    }

    @Override
    public List<Absence> getAll() {
        return repo.findAll();
    }

    @Override
    public Absence getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Absence> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public Absence save(Absence objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }
    
}
