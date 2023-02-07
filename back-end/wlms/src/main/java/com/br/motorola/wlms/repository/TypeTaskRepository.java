package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.br.motorola.wlms.model.TypeTask;

public interface TypeTaskRepository extends JpaRepository<TypeTask, Long> {
    @Query(
        "SELECT tt FROM TypeTask tt WHERE tt.type_task_name LIKE %?1%"
    )
    List<TypeTask> findByAll(String nome);
}
