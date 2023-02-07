package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.Admin;
import com.br.motorola.wlms.repository.AdminRepository;

@Service
public class AdminService implements ICrudService<Admin>{
    
    private final AdminRepository repo;
    private final TrainingService serviceTraining;
    private final UserService serviceUser;

    @Autowired
    public AdminService(
        AdminRepository repo,
        TrainingService serviceTraining,
        UserService serviceUser
    ){
        this.repo = repo;
        this.serviceTraining = serviceTraining;
        this.serviceUser = serviceUser;
    }

    @Override
    public List<Admin> getAll() {
        return repo.findAll();
    }

    @Override
    public Admin getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Admin> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public Admin save(Admin objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }
    
}
