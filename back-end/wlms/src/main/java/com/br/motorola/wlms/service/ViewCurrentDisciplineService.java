package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.br.motorola.wlms.projections.ViewCurrentDiscipline;
import com.br.motorola.wlms.repository.ViewCurrentDisciplineRepository;
@Service
public class ViewCurrentDisciplineService {

    private final ViewCurrentDisciplineRepository repo;
    @Autowired
    public ViewCurrentDisciplineService(ViewCurrentDisciplineRepository repo) {
        this.repo = repo;
    }
    public List<ViewCurrentDiscipline> getByAll() {
        return repo.getviewcurrentdiscipline();
    }
    public List<ViewCurrentDiscipline> getById2(String termoBusca) {
        return repo.findById2(termoBusca);
    }
}
