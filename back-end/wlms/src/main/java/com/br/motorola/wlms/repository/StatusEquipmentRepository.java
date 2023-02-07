package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.br.motorola.wlms.model.StatusEquipment;

public interface StatusEquipmentRepository extends JpaRepository<StatusEquipment, Long> {
    @Query(
        "SELECT se FROM StatusEquipment se WHERE se.status_equipment_name LIKE %?1%"
    )
    List<StatusEquipment> findByAll(String nome);
}
