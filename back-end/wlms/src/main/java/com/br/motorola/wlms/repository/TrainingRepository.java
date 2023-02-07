package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.Training;

public interface TrainingRepository extends JpaRepository<Training, Long>{
@Query("SELECT t FROM Training t" +
" LEFT JOIN User u ON u.user_id = t.user" +
    " WHERE t.training_name LIKE %?1%" +
    " OR t.training_workload LIKE %?1%" +
    " OR u.user_name LIKE %?1%")
List<Training> findByAll(String nome);

}
