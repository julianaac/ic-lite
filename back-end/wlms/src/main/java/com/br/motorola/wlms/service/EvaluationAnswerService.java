package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.EvaluationAnswer;
import com.br.motorola.wlms.repository.EvaluationAnswerRepository;

@Service
public class EvaluationAnswerService implements ICrudService<EvaluationAnswer> {

    private final EvaluationAnswerRepository repo;
    private final SubjectService serviceSubject;
    private final TeacherService serviceTeacher;

    @Autowired
    public EvaluationAnswerService(
        EvaluationAnswerRepository repo,
        SubjectService serviceSubject,
        TeacherService serviceTeacher
    ){
        this.repo = repo;
        this.serviceSubject = serviceSubject;
        this.serviceTeacher = serviceTeacher;
    }

    @Override
    public List<EvaluationAnswer> getAll() {
        return repo.findAll();
    }

    @Override
    public EvaluationAnswer getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<EvaluationAnswer> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public EvaluationAnswer save(EvaluationAnswer objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }
    
}
