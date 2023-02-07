package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.GroupAnswer;
import com.br.motorola.wlms.repository.GroupAnswerRepository;

@Service
public class GroupAnswerService implements ICrudService<GroupAnswer>{

    private final GroupAnswerRepository repo;
    private final TaskService serviceTask;
    private final GroupService serviceGroup;

    @Autowired
    public GroupAnswerService(
        GroupAnswerRepository repo,
        TaskService serviceTask,
        GroupService serviceGroup
    ){
        this.repo = repo;
        this.serviceTask = serviceTask;
        this.serviceGroup = serviceGroup;
    }

    @Override
    public List<GroupAnswer> getAll() {
        return repo.findAll();
    }

    @Override
    public GroupAnswer getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<GroupAnswer> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public GroupAnswer save(GroupAnswer objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }
    public GroupAnswer nextStatus(Long id) {
        GroupAnswer registro = repo.findById(id).orElse(null);
        registro.setGroup_answer_status(registro.getGroup_answer_status().next());
        repo.save(registro);
        return registro;
    }
    public GroupAnswer previousStatus(Long id) {
        GroupAnswer registro = repo.findById(id).orElse(null);
        registro.setGroup_answer_status(registro.getGroup_answer_status().previous());
        repo.save(registro);
        return registro;
    }
    
}
