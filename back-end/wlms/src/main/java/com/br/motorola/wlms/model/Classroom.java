package com.br.motorola.wlms.model;

import java.sql.Date;

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
public class Classroom {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long classroom_id; 

        @Column(nullable = false)
        private String classroom_name;

        @Column(nullable = false)
        private Date classroom_start_date;

        @Column(nullable = false)
        private Date classroom_end_date;

        @ManyToOne(optional = false)
        @JoinColumn(name = "classroom_training_fk")
        private Training training;

        @ManyToOne(optional = false)
        @JoinColumn(name = "classroom_laboratory_fk")
        private Laboratory laboratory;
            
}
