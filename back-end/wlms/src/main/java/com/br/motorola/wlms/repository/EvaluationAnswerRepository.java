package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.EvaluationAnswer;

public interface EvaluationAnswerRepository extends JpaRepository<EvaluationAnswer, Long>{
    @Query("SELECT ea FROM EvaluationAnswer ea" +
        " LEFT JOIN Subject s ON s.subject_id = ea.subject" +
        " LEFT JOIN Teacher t ON t.teacher_id = ea.teacher" +
        " LEFT JOIN User u ON u.user_id = t.user" +
        " WHERE s.subject_name LIKE %?1%" +
        " OR u.user_name LIKE %?1%")
    List<EvaluationAnswer> findByAll(String nome);
}
