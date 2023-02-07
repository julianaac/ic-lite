package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.GroupTask;
import com.br.motorola.wlms.repository.GroupTaskRepository;

@Service
public class GroupService implements ICrudService<GroupTask>{

    private final GroupTaskRepository repo;
    private final TaskService serviceTask;

    @Autowired
    public GroupService(
        GroupTaskRepository repo,
        TaskService serviceTask
    ){
        this.repo = repo;
        this.serviceTask = serviceTask;
    }
    @Override
    public List<GroupTask> getAll() {
        return repo.findAll();
    }

    @Override
    public GroupTask getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<GroupTask> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public GroupTask save(GroupTask objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }
    
}
