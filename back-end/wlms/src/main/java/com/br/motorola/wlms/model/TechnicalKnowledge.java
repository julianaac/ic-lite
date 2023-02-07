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
public class TechnicalKnowledge {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long technical_knowledge_id; 

        @Column
        private Integer technical_knowledge_frontend;

        @Column
        private Integer technical_knowledge_backend;
        
        @Column
        private Integer technical_knowledge_git; 

        @Column
        private Integer technical_knowledge_database;  
             
}
