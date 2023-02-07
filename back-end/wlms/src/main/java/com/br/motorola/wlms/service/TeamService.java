package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.Team;
import com.br.motorola.wlms.repository.TeamRepository;


@Service
public class TeamService implements ICrudService<Team> {
    private final TeamRepository repo;

    @Autowired
    public TeamService(TeamRepository repo){
        this.repo = repo;
    }
    @Override
    public List<Team> getAll() {
        return repo.findAll();
    }

    @Override
    public Team getById(Long id) {
        
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Team> getByAll(String termoBusca) {
        
        return repo.findByAll(termoBusca);
    }

    @Override
    public Team save(Team objeto) {
        
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }
    
}
