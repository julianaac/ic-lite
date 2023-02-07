package com.br.motorola.wlms.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import lombok.*;

@Getter
@Setter
@Entity
public class Admin {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long admin_id; 

        @ManyToOne(optional = false)
        @JoinColumn(name = "admin_training_fk")
        private Training training;

        
        @OneToOne(optional = false)
        @JoinColumn(name = "admin_user_fk")
        private User user;
     
}
