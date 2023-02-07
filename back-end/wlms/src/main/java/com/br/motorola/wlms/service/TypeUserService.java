package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.TypeUser;
import com.br.motorola.wlms.repository.TypeUserRepository;

@Service
public class TypeUserService implements ICrudService<TypeUser> {

    private final TypeUserRepository repo;

    @Autowired
    public TypeUserService(TypeUserRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<TypeUser> getAll() {
        return repo.findAll();
    }

    @Override
    public TypeUser getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<TypeUser> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public TypeUser save(TypeUser objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);    
    }
    
}
