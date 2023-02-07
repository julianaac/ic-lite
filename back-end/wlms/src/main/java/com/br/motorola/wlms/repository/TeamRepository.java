package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.Team;

public interface TeamRepository extends JpaRepository<Team, Long>{
    @Query(
        "SELECT t FROM Team t WHERE t.team_name LIKE %?1%"
    )
    List<Team> findByAll(String nome);
}
