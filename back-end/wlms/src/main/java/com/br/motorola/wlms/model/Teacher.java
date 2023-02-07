package com.br.motorola.wlms.model;

import java.io.Serializable;

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
public class Teacher implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long teacher_id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "teacher_training_fk")
    private Training training;
    
    @OneToOne(optional = false)
    @JoinColumn(name = "teacher_user_fk")
    private User user;
}
