package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.User;
import com.br.motorola.wlms.projections.ViewCoordenadorProjeto;

public interface ViewCoordenadorProjetoRepository extends JpaRepository<User, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM viewcoordenadorprojeto")
    List<ViewCoordenadorProjeto> getviewcoordenadorprojeto();
     
}