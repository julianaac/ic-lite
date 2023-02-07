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
public class Modality {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long modality_id; 

        @Column(nullable = false)
        private String modality_code;

        @Column(nullable = false)
        private String modality_name;
}
