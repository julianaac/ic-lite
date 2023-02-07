package com.br.motorola.wlms.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;

@Getter
@Setter
@Entity
public class TypeTechnology {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long type_technology_id; 

        @Column(nullable = false)
        private String type_technology_name;   
        
             
}
