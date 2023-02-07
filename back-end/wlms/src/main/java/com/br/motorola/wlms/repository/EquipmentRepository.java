package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.Equipment;

public interface EquipmentRepository extends JpaRepository<Equipment, Long>{
@Query("SELECT e FROM Equipment e" +
" LEFT JOIN StatusEquipment se ON se.status_equipment_id = e.statusEquipment" +
" LEFT JOIN Training t ON t.training_id = e.training" +
    " WHERE e.equipment_name LIKE %?1%" +
    " OR se.status_equipment_name LIKE %?1%" +
    " OR t.training_name LIKE %?1%")
List<Equipment> findByAll(String nome);
}
