package com.br.motorola.wlms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import com.br.motorola.wlms.model.Classroom;

public interface ClassroomRepository extends JpaRepository<Classroom, Long>{
    @Query(
        "SELECT c FROM Classroom c WHERE c.classroom_name LIKE %?1%"
    )
    List<Classroom> findByAll(String nome);  
}