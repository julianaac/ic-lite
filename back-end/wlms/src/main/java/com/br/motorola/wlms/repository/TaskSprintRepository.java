package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.br.motorola.wlms.model.TaskSprint;

public interface TaskSprintRepository extends JpaRepository<TaskSprint, Long> {
    @Query(
        "SELECT ts FROM TaskSprint ts WHERE ts.task_sprint_name LIKE %?1%"
    )
    List<TaskSprint> findByAll(String nome);
}
