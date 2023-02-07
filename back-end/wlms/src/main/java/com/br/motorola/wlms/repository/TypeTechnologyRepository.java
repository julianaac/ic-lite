package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.TypeTechnology;

public interface TypeTechnologyRepository extends JpaRepository<TypeTechnology, Long> {
    @Query(
        "SELECT tt FROM TypeTechnology tt WHERE tt.type_technology_name LIKE %?1%"
    )
    List<TypeTechnology> findByAll(String nome);
}
