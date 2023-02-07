package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
    @Query(
        "SELECT t FROM Task t"+
        " LEFT JOIN Subject s ON s.subject_id = t.subject" +
        " LEFT JOIN TypeTask tt ON tt.type_task_id = t.typeTask" +
        " WHERE t.task_name LIKE %?1%" +
        " OR s.subject_name LIKE %?1%" +
        " OR tt.type_task_name LIKE %?1%")
    List<Task> findByAll(String nome);
}
