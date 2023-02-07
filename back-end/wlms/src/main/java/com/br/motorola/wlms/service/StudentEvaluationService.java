package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.StudentEvaluation;
import com.br.motorola.wlms.repository.StudentEvaluationRepository;

@Service
public class StudentEvaluationService implements ICrudService<StudentEvaluation> {

    private final StudentEvaluationRepository repo;
    private final SubjectService serviceSubject;
    private final StudentService serviceStudent;
    private final TeacherService serviceTeacher;
    private final TrainingService serviceTraining;

    @Autowired
    public StudentEvaluationService(
        StudentEvaluationRepository repo,
        SubjectService serviceSubject,
        StudentService serviceStudent,
        TeacherService serviceTeacher,
        TrainingService serviceTraining
    ){
        this.repo = repo;
        this.serviceSubject = serviceSubject;
        this.serviceStudent = serviceStudent;
        this.serviceTeacher = serviceTeacher;
        this.serviceTraining = serviceTraining;
    }

    @Override
    public List<StudentEvaluation> getAll() {
        return repo.findAll();
    }

    @Override
    public StudentEvaluation getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<StudentEvaluation> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public StudentEvaluation save(StudentEvaluation objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }
    
}
