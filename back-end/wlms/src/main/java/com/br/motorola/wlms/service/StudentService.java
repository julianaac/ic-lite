package com.br.motorola.wlms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.motorola.wlms.model.Situation;
import com.br.motorola.wlms.model.SocioeconomicInformation;
import com.br.motorola.wlms.model.Student;
import com.br.motorola.wlms.model.TechnicalKnowledge;
import com.br.motorola.wlms.model.User;
import com.br.motorola.wlms.repository.StudentRepository;

@Service
public class StudentService implements ICrudService<Student> {
    private final StudentRepository repo;
    private final UserService serviceUser;
    private final ModalityService serviceModality;
    private final SocioeconomicInformationService serviceSocioEconomicInformation;
    private final TechnicalKnowledgeService serviceTechnicalKnowledge;
    private final SituationService situationService;
    @Autowired
    public StudentService(
        StudentRepository repo,
        UserService serviceUser,
        ModalityService serviceModality,
        SocioeconomicInformationService serviceSocioEconomicInformation,
        TechnicalKnowledgeService serviceTechnicalKnowledge,
        SituationService situationService
    ){
        this.repo = repo;
        this.situationService = situationService;
        this.serviceUser = serviceUser;
        this.serviceModality = serviceModality;
        this.serviceSocioEconomicInformation = serviceSocioEconomicInformation;
        this.serviceTechnicalKnowledge = serviceTechnicalKnowledge;
    }
    public List<Student> getAll() {
        return repo.findAll();
    }

    @Override
    public Student getById(Long id) {
        return repo.findById(id).orElse(null);
    }
    public Student getByUser(Long id) {
        return repo.findByUser(id);
    }

    @Override
    public List<Student> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }

    @Override
    public Student save(Student objeto) {
        if (objeto.getSocioeconomicInformation() == null) {
            SocioeconomicInformation newSocioeconomicInformation = new SocioeconomicInformation();
            objeto.setSocioeconomicInformation(newSocioeconomicInformation);
        }
        if (objeto.getTechnicalKnowledge() == null) {
            TechnicalKnowledge newTechnicalKnowledge = new TechnicalKnowledge();
            objeto.setTechnicalKnowledge(newTechnicalKnowledge);
        }
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
        Student registro = repo.findById(id).orElse(null);
        User user = serviceUser.getById(registro.getUser().getUser_id());
        if(user.getSituation().getSituation_id()==1){
            Long num = Long.parseLong("2");
            Situation situation = situationService.getById(num);
            user.setSituation(situation);
        }else{
            if(user.getSituation().getSituation_id()==4){
                Long num = Long.parseLong("5");
                Situation situation = situationService.getById(num);
                user.setSituation(situation);
            }
        }
        serviceUser.save(user);
       
        //verificar a regra de negócio pode ser excluido?
        //caso possa 
        // repo.deleteById(id);
    }
    
}
