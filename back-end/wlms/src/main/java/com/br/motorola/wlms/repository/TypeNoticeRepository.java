package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.br.motorola.wlms.model.TypeNotice;

public interface TypeNoticeRepository extends JpaRepository<TypeNotice, Long> {
    @Query(
        "SELECT tn FROM TypeNotice tn WHERE tn.type_notice_name LIKE %?1%"
    )
    List<TypeNotice> findByAll(String nome);
}
