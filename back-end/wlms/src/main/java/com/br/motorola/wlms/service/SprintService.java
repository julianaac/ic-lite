package com.br.motorola.wlms.service;
import com.br.motorola.wlms.model.Sprint;
import com.br.motorola.wlms.repository.SprintRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SprintService implements ICrudService<Sprint>{

    private final SprintRepository repo;
    private final TeamService teamService;
    private final UserService userService;

    @Autowired
    public SprintService(
        SprintRepository repo,
        TeamService teamService, UserService userService
    ){
        this.repo = repo;
        this.teamService = teamService;
        this.userService = userService;

    }

    @Override
    public List<Sprint> getAll() {
        return repo.findAll();
    }

    @Override
    public Sprint getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Sprint> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public Sprint save(Sprint objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }
}
