package com.br.motorola.wlms.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.*;

@Getter
@Setter
@Entity
public class Training implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long training_id;

    @Column(nullable = false)
    private String training_name;

    @Column(nullable = false)
    private int training_workload;

    @Column(nullable = false)
    private Date training_start_date;

    @Column(nullable = false)
    private Date training_end_date;

    @OneToOne
    @JoinColumn(name = "training_coordinator_fk")
    private User user;
    
}
