package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.Notice;
import com.br.motorola.wlms.repository.NoticeRepository;

@Service
public class NoticeService implements ICrudService<Notice>{

    private final NoticeRepository repo;
    private final TrainingService serviceTraining;
    private final TypeNoticeService serviceTypeNotice;
    private final ClassroomService serviceClassroom;

    @Autowired
    public NoticeService(
        NoticeRepository repo,
        TrainingService serviceTraining,
        TypeNoticeService serviceTypeNotice,
        ClassroomService serviceClassroom
    ){
        this.repo = repo;
        this.serviceTraining = serviceTraining;
        this.serviceTypeNotice = serviceTypeNotice;
        this.serviceClassroom = serviceClassroom;
    }

    @Override
    public List<Notice> getAll() {
        return repo.findAll();
    }

    @Override
    public Notice getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Notice> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public Notice save(Notice objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        
    }
    
}
