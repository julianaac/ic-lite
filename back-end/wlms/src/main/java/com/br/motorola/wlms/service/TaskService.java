package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.EStatusTask;
import com.br.motorola.wlms.model.Task;
import com.br.motorola.wlms.repository.TaskRepository;

@Service
public class TaskService implements ICrudService<Task> {

    private final TaskRepository repo;
    private final SubjectService serviceSubject;
    private final TypeTaskService serviceTypeTask;

    @Autowired
    public TaskService(
        TaskRepository repo,
        SubjectService serviceSubject,
        TypeTaskService serviceTypeTask
    ){
        this.repo = repo;
        this.serviceSubject = serviceSubject;
        this.serviceTypeTask = serviceTypeTask;
    }

    @Override
    public List<Task> getAll() {
        return repo.findAll();
    }

    @Override
    public Task getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Task> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public Task save(Task objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        Task registro = repo.findById(id).orElse(null);
        registro.setTask_status(EStatusTask.ARQUIVADA);
        repo.save(registro);
    }
    public Task nextStatus(Long id) {
        Task registro = repo.findById(id).orElse(null);
        registro.setTask_status(registro.getTask_status().next());
        repo.save(registro);
        return registro;
    }
    public Task previousStatus(Long id) {
        Task registro = repo.findById(id).orElse(null);
        registro.setTask_status(registro.getTask_status().previous());
        repo.save(registro);
        return registro;
    }

}
