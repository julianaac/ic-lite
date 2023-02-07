package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.User;
import com.br.motorola.wlms.projections.ViewCurrentDisciplineCheckoutRel;

public interface ViewCurrentDisciplineCheckoutRelRepository extends JpaRepository<User, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM viewcurrentdisciplinecheckoutrel")
    List<ViewCurrentDisciplineCheckoutRel> getviewcurrentdisciplinecheckoutrel();

    @Query(
        nativeQuery = true, value = "SELECT * FROM viewcurrentdisciplinecheckoutrel where user_id = ?1"
    )
    ViewCurrentDisciplineCheckoutRel findById2(Long id);  
     
}