package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.projections.ViewCheckinStudent;
import com.br.motorola.wlms.repository.ViewCheckinStudentRepository;
@Service
public class ViewCheckinStudentService {

    private final ViewCheckinStudentRepository repo;
    @Autowired
    public ViewCheckinStudentService(ViewCheckinStudentRepository repo) {
        this.repo = repo;
    }
    public List<ViewCheckinStudent> getByAll() {
        return repo.getviewcheckinstudent();
    }
    
}
