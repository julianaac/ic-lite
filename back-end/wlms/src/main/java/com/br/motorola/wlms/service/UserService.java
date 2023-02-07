package com.br.motorola.wlms.service;
import com.br.motorola.wlms.model.Situation;
import com.br.motorola.wlms.model.User;
import com.br.motorola.wlms.repository.SituationRepository;
import com.br.motorola.wlms.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements ICrudService<User>{

    private final UserRepository repo;
    private final SituationService serviceSituation;
    private final TypeUserService serviceTypeUser;

    @Autowired
    public UserService(
        UserRepository repo,
        SituationService serviceSituation,
        TypeUserService serviceTypeUser
    ){
        this.repo = repo;
        this.serviceSituation = serviceSituation;
        this.serviceTypeUser = serviceTypeUser;
    }

    @Override
    public List<User> getAll() {
        return repo.findAll();
    }

    @Override
    public User getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<User> getByAll(String termoBusca) {
        return repo.findByAll(termoBusca);
    }
    public List<User> getByType() {
        return repo.findByCor();
    }
    @Override
    public User save(User objeto) {
        if (objeto.getUser_password() == null) {
            Long id = objeto.getUser_id();
            User usuario = repo.findById(id).orElse(null);
            if (usuario != null) {
                objeto.setUser_password(usuario.getUser_password(), false);
            }
        }
        return repo.save(objeto);
    }

    @Override
    public void delete(Long id) {
       //    
    }
    public void updateSituation(Long id, Long situacao) {
        User regist = repo.findById(id).orElse(null);
        Situation newSituation = serviceSituation.getById(situacao);
        if(regist.getSituation().getSituation_id()==1 || regist.getSituation().getSituation_id()==1){
           regist.setSituation(newSituation);
        }
        repo.save(regist);         
     }
     public User getByUserUser(String user) {
        User usuario = repo.findByUser_User(user);
        return usuario;
    }
}
