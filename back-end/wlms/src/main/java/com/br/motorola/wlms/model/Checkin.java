package com.br.motorola.wlms.model;

import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.*;

@Getter
@Setter
@Entity
public class Checkin {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long checkin_id; 

        @Column(nullable = false)
        @DateTimeFormat(pattern = "dd/MM/yyyy h:mm:aa")
        private LocalDateTime checkin_entry;

        @Column(nullable = false)
        @DateTimeFormat(pattern = "dd/MM/yyyy h:mm:aa")
        private LocalDateTime checkin_exit;

        @Column(nullable = false)
        private int checkin_status;

        @Column(nullable = false)
        private int checkin_valid;

        @ManyToOne(optional = false)
        @JoinColumn(name = "checkin_student_fk")
        private Student student;

        @ManyToOne(optional = false)
        @JoinColumn(name = "checkin_classroom_fk")
        private Classroom classroom;

        @ManyToOne(optional = false)
        @JoinColumn(name = "checkin_subject_fk")
        private Subject subject;
            
}
