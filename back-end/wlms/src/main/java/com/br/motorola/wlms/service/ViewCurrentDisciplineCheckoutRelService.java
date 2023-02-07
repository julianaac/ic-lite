package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.br.motorola.wlms.projections.ViewCurrentDisciplineCheckoutRel;
import com.br.motorola.wlms.repository.ViewCurrentDisciplineCheckoutRelRepository;
@Service
public class ViewCurrentDisciplineCheckoutRelService {

    private final ViewCurrentDisciplineCheckoutRelRepository repo;
    @Autowired
    public ViewCurrentDisciplineCheckoutRelService(ViewCurrentDisciplineCheckoutRelRepository repo) {
        this.repo = repo;
    }
    public List<ViewCurrentDisciplineCheckoutRel> getByAll() {
        return repo.getviewcurrentdisciplinecheckoutrel();
    }
    public ViewCurrentDisciplineCheckoutRel getById2(Long id) {
        return repo.findById2(id);
    }
}
