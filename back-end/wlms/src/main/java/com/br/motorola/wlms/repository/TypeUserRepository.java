package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.TypeUser;

public interface TypeUserRepository extends JpaRepository<TypeUser, Long> {

    @Query(
        "SELECT tu FROM TypeUser tu WHERE tu.type_user_name LIKE %?1%"
    )
    List<TypeUser> findByAll(String nome);
    
}

