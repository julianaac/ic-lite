package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.TechnicalSupport;

public interface TechnicalSupportRepository extends JpaRepository<TechnicalSupport, Long> {
    @Query(
        "SELECT ts FROM TechnicalSupport ts"+
        " LEFT JOIN Laboratory l ON l.laboratory_id = ts.laboratory" +
        " LEFT JOIN User u ON u.user_id = ts.technical" +
        " WHERE u.user_name LIKE %?1%" +
        " OR l.laboratory_name LIKE %?1%")
    List<TechnicalSupport> findByAll(String nome);
}
