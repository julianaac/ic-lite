package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.EquipmentLocation;

public interface EquipmentLocationRepository extends JpaRepository<EquipmentLocation, Long>{
    @Query("SELECT el FROM EquipmentLocation el" +
        " LEFT JOIN Laboratory l ON l.laboratory_id = el.laboratory" +
        " LEFT JOIN Equipment e ON e.equipment_id = el.equipment" +
        " LEFT JOIN Student s ON s.student_id = el.student" +
        " LEFT JOIN User u ON u.user_id = s.user" +
        " WHERE l.laboratory_name LIKE %?1%" +
        " OR e.equipment_name LIKE %?1%" +
        " OR u.user_name LIKE %?1%")
    List<EquipmentLocation> findByAll(String nome);
}
