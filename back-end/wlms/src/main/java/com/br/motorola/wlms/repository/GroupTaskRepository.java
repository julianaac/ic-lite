package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.GroupTask;
public interface GroupTaskRepository extends JpaRepository<GroupTask, Long>{
@Query(
    "SELECT g FROM GroupTask g WHERE g.group_name LIKE %?1%"
)
List<GroupTask> findByAll(String nome);

}//futuramente permitir pesquisar por membro do time
