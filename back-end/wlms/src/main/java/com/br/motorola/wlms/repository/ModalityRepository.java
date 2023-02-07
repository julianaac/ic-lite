package com.br.motorola.wlms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import com.br.motorola.wlms.model.Modality;

public interface ModalityRepository extends JpaRepository<Modality, Long>{
    @Query(
        "SELECT m FROM Modality m WHERE m.modality_name LIKE %?1%"
    )
    List<Modality> findByAll(String nome);  
}