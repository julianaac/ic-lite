package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.Situation;

public interface SituationRepository extends JpaRepository<Situation, Long> {
    @Query(
        "SELECT s FROM Situation s WHERE s.situation_name LIKE %?1%"
    )
    List<Situation> findByAll(String nome);
}
