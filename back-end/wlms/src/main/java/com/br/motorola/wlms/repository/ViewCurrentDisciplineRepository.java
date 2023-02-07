package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.User;
import com.br.motorola.wlms.projections.ViewCurrentDiscipline;

public interface ViewCurrentDisciplineRepository extends JpaRepository<User, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM viewcurrentdiscipline")
    List<ViewCurrentDiscipline> getviewcurrentdiscipline();

    @Query(
        nativeQuery = true, value = "SELECT * FROM viewcurrentdiscipline where student_id = ?1"
    )
    List<ViewCurrentDiscipline> findById2(String nome);  
     
}