package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.GroupAnswer;

public interface GroupAnswerRepository extends JpaRepository<GroupAnswer, Long>{
    @Query("SELECT ga FROM GroupAnswer ga" +
        " LEFT JOIN GroupTask g ON g.group_id = ga.group" +
        " WHERE g.group_name LIKE %?1%")
    List<GroupAnswer> findByAll(String nome);
}
