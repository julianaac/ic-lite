package com.br.motorola.wlms.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.*;
@Getter
@Setter
@Entity
public class EquipmentLocation implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long equipment_location_id;

    @Column(nullable = false)
    private String equipment_location_period;

    @ManyToOne(optional = false)
    @JoinColumn(name = "equipment_location_student_fk")
    private  Student student;

    @ManyToOne(optional = false)
    @JoinColumn(name = "equipment_location_equipment_fk")
    private Equipment equipment;

    @ManyToOne(optional = false)
    @JoinColumn(name = "equipment_location_laboratory_fk")
    private Laboratory laboratory;

    @ManyToOne(optional = false)
    @JoinColumn(name = "equipment_location_training_fk")
    private Training training;

    @ManyToOne(optional = false)
    @JoinColumn(name = "equipment_location_classroom_fk")
    private Classroom classroom;
    
}
