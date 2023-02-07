package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.TaskSprint;
import com.br.motorola.wlms.repository.SprintRepository;
import com.br.motorola.wlms.repository.TaskSprintRepository;

@Service
public class TaskSprintService implements ICrudService<TaskSprint> {

    private final TaskSprintRepository repo;
    private final SprintService serviceSprint;

    @Autowired
    public TaskSprintService(
        TaskSprintRepository repo,
        SprintService serviceSprint
    ){
        this.repo = repo;
        this.serviceSprint = serviceSprint;
    }

    @Override
    public List<TaskSprint> getAll() {
        return repo.findAll();
    }

    @Override
    public TaskSprint getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<TaskSprint> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public TaskSprint save(TaskSprint objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }
    
}
