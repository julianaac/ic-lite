package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.SingleAnswer;
import com.br.motorola.wlms.repository.SingleAnswerRepository;

@Service
public class SingleAnswerService implements ICrudService<SingleAnswer>{

    private final SingleAnswerRepository repo;
    private final UserService serviceUser;
    private final TaskService serviceTask;

    @Autowired
    public SingleAnswerService(
        SingleAnswerRepository repo,
        UserService serviceUser,
        TaskService serviceTask

    ){
        this.repo = repo;
        this.serviceUser = serviceUser;
        this.serviceTask = serviceTask;
    }

    @Override
    public List<SingleAnswer> getAll() {
        return repo.findAll();
    }

    @Override
    public SingleAnswer getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<SingleAnswer> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public SingleAnswer save(SingleAnswer objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }
    public SingleAnswer nextStatus(Long id) {
        SingleAnswer registro = repo.findById(id).orElse(null);
        registro.setSingle_answer_status(registro.getSingle_answer_status().next());
        repo.save(registro);
        return registro;
    }
    public SingleAnswer previousStatus(Long id) {
        SingleAnswer registro = repo.findById(id).orElse(null);
        registro.setSingle_answer_status(registro.getSingle_answer_status().previous());
        repo.save(registro);
        return registro;
    }
    
}
