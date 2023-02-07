package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.br.motorola.wlms.projections.ViewCoordenadorProjeto;
import com.br.motorola.wlms.repository.ViewCoordenadorProjetoRepository;
@Service
public class ViewCoordenadorProjetoService {

    private final ViewCoordenadorProjetoRepository repo;
    @Autowired
    public ViewCoordenadorProjetoService(ViewCoordenadorProjetoRepository repo) {
        this.repo = repo;
    }
    public List<ViewCoordenadorProjeto> getByAll() {
        return repo.getviewcoordenadorprojeto();
    }
    
}
