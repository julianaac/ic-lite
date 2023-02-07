package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.GradeMemberGroup;
import com.br.motorola.wlms.repository.GradeMemberGroupRepository;

@Service
public class GradeMemberGroupService implements ICrudService<GradeMemberGroup> {

    private final GradeMemberGroupRepository repo;
    private final GroupAnswerService serviceGroupAnswer;
    private final StudentService serviceStudent;

    @Autowired
    public GradeMemberGroupService(
        GradeMemberGroupRepository repo,
        GroupAnswerService serviceGroupAnswer,
        StudentService serviceStudent
    ){
        this.repo = repo;
        this.serviceGroupAnswer = serviceGroupAnswer;
        this.serviceStudent = serviceStudent;
    }

    @Override
    public List<GradeMemberGroup> getAll() {
        return repo.findAll();
    }

    @Override
    public GradeMemberGroup getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<GradeMemberGroup> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public GradeMemberGroup save(GradeMemberGroup objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }
    
}
