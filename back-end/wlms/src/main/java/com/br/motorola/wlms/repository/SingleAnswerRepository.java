package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.SingleAnswer;

public interface SingleAnswerRepository extends JpaRepository<SingleAnswer, Long> {
    @Query(
        "SELECT sa FROM SingleAnswer sa"+
        " LEFT JOIN User u ON u.user_id = sa.user" +
        " LEFT JOIN Task t ON t.task_id = sa.task" +
        " WHERE u.user_name LIKE %?1%" +
        " OR t.task_name LIKE %?1%"
    )
    List<SingleAnswer> findByAll(String nome);
}
