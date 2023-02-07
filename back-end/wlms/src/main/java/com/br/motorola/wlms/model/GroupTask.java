package com.br.motorola.wlms.model;

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
public class GroupTask {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long group_id; 

        @Column(nullable = false)
        private String group_name;

        @Column(nullable = false)
        private String group_member;  
        
        @OneToOne(optional = false)
        @JoinColumn(name = "group_task_fk")
        private Task task; 
        
             
}
