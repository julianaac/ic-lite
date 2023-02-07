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
public class Equipment implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long equipment_id;

    @Column(nullable = false)
    private String equipment_name;

    @Column(nullable = false, columnDefinition="text")
    private String equipment_description;

    @Column(nullable = false)
    private String equipment_identifier;

    @ManyToOne(optional = false)
    @JoinColumn(name = "equipment_status_equipment_fk")
    private  StatusEquipment statusEquipment;

    @ManyToOne(optional = false)
    @JoinColumn(name = "equipment_training_fk")
    private Training training;
    
}
