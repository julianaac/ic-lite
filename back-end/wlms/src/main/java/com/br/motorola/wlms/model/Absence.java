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
public class Absence {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long absence_id; 

        @Column(nullable = false)
        private boolean absence_if_justified;

        @Column(nullable = false)
        private Date absence_date;

        @ManyToOne(optional = false)
        @JoinColumn(name = "absence_students_fk")
        private Student student;

        @ManyToOne(optional = false)
        @JoinColumn(name = "absence_subject_fk")
        private Subject subject;
           
}
