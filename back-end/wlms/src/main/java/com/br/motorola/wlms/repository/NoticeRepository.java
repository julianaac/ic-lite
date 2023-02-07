package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.br.motorola.wlms.model.Notice;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
    @Query("SELECT n FROM Notice n" +
    " LEFT JOIN Classroom c ON c.classroom_id = n.classroom" +
    " LEFT JOIN Training t ON t.training_id = n.training" +
    " WHERE n.notice_title LIKE %?1%" +
    " OR t.training_name LIKE %?1%" +
    " OR c.classroom_name LIKE %?1%")
    List<Notice> findByAll(String nome);
}
