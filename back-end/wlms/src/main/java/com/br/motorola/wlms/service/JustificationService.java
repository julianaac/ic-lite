package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.Justification;
import com.br.motorola.wlms.repository.JustificationRepository;

@Service
public class JustificationService implements ICrudService<Justification> {

    private final JustificationRepository repo;
    private final StudentService serviceStudent;
    private final RecordClassService serviceRecordClass;
    private final AbsenceService serviceAbsence;

    @Autowired
    public JustificationService(
        JustificationRepository repo,
        StudentService serviceStudent,
        RecordClassService serviceRecordClass,
        AbsenceService serviceAbsence
    ){
        this.repo = repo;
        this.serviceStudent = serviceStudent;
        this.serviceRecordClass = serviceRecordClass;
        this.serviceAbsence = serviceAbsence;
    }

    @Override
    public List<Justification> getAll() {
        return repo.findAll();
    }

    @Override
    public Justification getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Justification> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public Justification save(Justification objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }
    
}
