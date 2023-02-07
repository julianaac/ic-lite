package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.Checkin;
import com.br.motorola.wlms.repository.CheckinRepository;


@Service
public class CheckinService implements ICrudService<Checkin> {

    private final CheckinRepository repo;
    private final StudentService serviceStudent;
    private final ClassroomService serviceClassroom;
    private final SubjectService serviceSubject;

    @Autowired
    public CheckinService(
        CheckinRepository repo,
        StudentService serviceStudent,
        ClassroomService serviceClassroom,
        SubjectService serviceSubject
    ){
        this.repo = repo;
        this.serviceStudent = serviceStudent;
        this.serviceClassroom = serviceClassroom;
        this.serviceSubject = serviceSubject;
    }

    @Override
    public List<Checkin> getAll() {
        return repo.findAll();
    }

    @Override
    public Checkin getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Checkin> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public Checkin save(Checkin objeto) {
        return repo.save(objeto);
    }
    public Checkin findCheckinCurrent(Long id){
        return repo.findCheckinCurrent(id).get(repo.findCheckinCurrent(id).size()-1);
    }
    //função para otimizar checkin caso der tempo
    //ver como usar o leftJoin na consulta
    // public Checkin findCheckinCurrentDate(Long id){
    //     return repo.findCheckinCurrentDate(serviceStudent.getByUser(id).getStudent_id());
    // }

    @Override
    public void delete(Long id) {
        
    }
    
    
}
