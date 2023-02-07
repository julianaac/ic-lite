package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.Technology;

public interface TechnologyRepository extends JpaRepository<Technology, Long> {
    @Query(
        "SELECT t FROM Technology t WHERE t.technology_name LIKE %?1%"
    )
    List<Technology> findByAll(String nome);
}
