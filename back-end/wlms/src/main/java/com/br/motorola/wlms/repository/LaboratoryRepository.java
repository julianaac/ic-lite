package com.br.motorola.wlms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.Laboratory;

public interface LaboratoryRepository extends JpaRepository<Laboratory, Long>{
    @Query(
        "SELECT l FROM Laboratory l WHERE l.laboratory_name LIKE %?1%"
    )
    List<Laboratory> findByAll(String nome);  
}