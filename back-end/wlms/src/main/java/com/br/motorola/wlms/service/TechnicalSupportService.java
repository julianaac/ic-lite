package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.EStatusTechnicalSupport;
import com.br.motorola.wlms.model.TechnicalSupport;
import com.br.motorola.wlms.repository.TechnicalSupportRepository;

@Service
public class TechnicalSupportService implements ICrudService<TechnicalSupport> {

    private final TechnicalSupportRepository repo;
    private final UserService serviceUser;
    private final LaboratoryService serviceLaboratory;
    private final TrainingService serviceTraining;

    @Autowired
    public TechnicalSupportService(
        TechnicalSupportRepository repo,
        UserService serviceUser,
        LaboratoryService serviceLaboratory,
        TrainingService serviceTraining
    ){
        this.repo = repo;
        this.serviceUser = serviceUser;
        this.serviceLaboratory = serviceLaboratory;
        this.serviceTraining = serviceTraining;
    }

    @Override
    public List<TechnicalSupport> getAll() {
        return repo.findAll();
    }

    @Override
    public TechnicalSupport getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<TechnicalSupport> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public TechnicalSupport save(TechnicalSupport objeto) {
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        TechnicalSupport registro = repo.findById(id).orElse(null);
        registro.setTechnical_support_status(EStatusTechnicalSupport.CANCELADO);
        repo.save(registro);
    }
    public TechnicalSupport nextStatus(Long id) {
        TechnicalSupport registro = repo.findById(id).orElse(null);
        registro.setTechnical_support_status(registro.getTechnical_support_status().next());
        repo.save(registro);
        return registro;
    }
    public TechnicalSupport previousStatus(Long id) {
        TechnicalSupport registro = repo.findById(id).orElse(null);
        registro.setTechnical_support_status(registro.getTechnical_support_status().previous());
        repo.save(registro);
        return registro;
    }
    
}
