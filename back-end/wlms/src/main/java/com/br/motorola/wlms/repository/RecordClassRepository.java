package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.RecordClass;

public interface RecordClassRepository extends JpaRepository<RecordClass, Long> {
    @Query(
        "SELECT rc FROM RecordClass rc"+
        " LEFT JOIN Classroom c ON c.classroom_id = rc.classroom" +
        " LEFT JOIN Subject s ON s.subject_id = rc.subject" +
        " WHERE c.classroom_name LIKE %?1%" +
        " OR s.subject_name LIKE %?1%" +
        " OR rc.record_class_date_entry LIKE %?1%")
    List<RecordClass> findByAll(String nome);
}
