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
public class Subject {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long subject_id; 

        @Column(nullable = false)
        private String subject_name;

        @Column(nullable = false)
        private Date subject_end_date;

        @Column(nullable = false)
        private Date subject_start_date;

        @Column(nullable = false)
        private int subject_workload;

        @Column(nullable = false)
        private int subject_number_classes;

        @ManyToOne(optional = false)
        @JoinColumn(name = "subject_training_fk")
        private Training training;

        //verificar talvez uma disci´lina possa ter mais de um professor ai seria manytomany
        @ManyToOne(optional = false)
        @JoinColumn(name = "subject_teacher_fk")
        private Teacher teacher;
        
        @ManyToOne(optional = false)
        @JoinColumn(name = "subject_classroom_fk")
        private Classroom classroom;
            
}
