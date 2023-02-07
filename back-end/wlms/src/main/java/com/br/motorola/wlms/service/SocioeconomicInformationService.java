package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.SocioeconomicInformation;
import com.br.motorola.wlms.repository.SocioeconomicInformationRepository;

@Service
public class SocioeconomicInformationService implements ICrudService<SocioeconomicInformation> {
    private final SocioeconomicInformationRepository repo;

    @Autowired
    public SocioeconomicInformationService(SocioeconomicInformationRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<SocioeconomicInformation> getAll() {
        return repo.findAll();
    }

    @Override
    public SocioeconomicInformation getById(Long id) {

        return repo.findById(id).orElse(null);
    }

    @Override
    public List<SocioeconomicInformation> getByAll(String termoBusca) {

        return repo.findByAll(termoBusca);
    }

    @Override
    public SocioeconomicInformation save(SocioeconomicInformation objeto) {

        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }

}
