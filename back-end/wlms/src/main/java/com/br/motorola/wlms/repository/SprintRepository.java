package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.Sprint;

public interface SprintRepository extends JpaRepository<Sprint, Long>{
    @Query(
        "SELECT s FROM Sprint s"+
        " LEFT JOIN User u ON u.user_id = s.user" +
        " WHERE u.user_name LIKE %?1%" +
        " OR s.sprint_name LIKE %?1%"
    )
    List<Sprint> findByAll(String nome);
}
