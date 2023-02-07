package com.br.motorola.wlms.model;

import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;

@Getter
@Setter
@Entity
public class Laboratory {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long laboratory_id; 

        @Column(nullable = false)
        private String laboratory_name;

        @Column(nullable = false, columnDefinition="text")
        private String laboratory_localization;    
        
        @Column(nullable = false)
        private LocalTime laboratory_open_time;

        
        @Column(nullable = false)
        private LocalTime laboratory_close_time;
        
             
}
