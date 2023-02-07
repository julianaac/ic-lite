package com.br.motorola.wlms.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.*;

@Getter
@Setter
@Entity
public class TechnicalSupport {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long technical_support_id; 

        @Column
        private String technical_support_description;

        @Column(nullable = false)
        @Enumerated(EnumType.STRING)
        private EStatusTechnicalSupport technical_support_status = EStatusTechnicalSupport.CRIADO;

        
        @ManyToOne(optional = true)
        @JoinColumn(name = "technical_support_technical_fk")
        private User technical;
        
        
        @ManyToOne(optional = false)
        @JoinColumn(name = "technical_support_teacher_fk")
        private User teacher; 


        @ManyToOne(optional = false)
        @JoinColumn(name = "technical_support_laboratory_fk")
        private Laboratory laboratory;
        
        
        @ManyToOne(optional = false)
        @JoinColumn(name = "technical_support_training_fk")
        private Training training;
             
}
