package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.TypeNotice;
import com.br.motorola.wlms.repository.TypeNoticeRepository;


@Service
public class TypeNoticeService implements ICrudService<TypeNotice> {
    private final TypeNoticeRepository repo;

    @Autowired
    public TypeNoticeService(TypeNoticeRepository repo){
        this.repo = repo;
    }
    @Override
    public List<TypeNotice> getAll() {
        return repo.findAll();
    }

    @Override
    public TypeNotice getById(Long id) {
        
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<TypeNotice> getByAll(String termoBusca) {
        
        return repo.findByAll(termoBusca);
    }

    @Override
    public TypeNotice save(TypeNotice objeto) {
        
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }
    
}
