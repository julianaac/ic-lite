package com.br.motorola.wlms.model;

import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
public class Task {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long task_id; 

        @Column(nullable = false)
        private String task_name;

        @Column(nullable = false)
        private String task_description;  
        
        //verificar se não seria interessante poder receber null
        @Column(nullable = false)
        private String task_file; 

        @Column(nullable = false)
        @DateTimeFormat(pattern="dd/MM/yyyy hh:mm:aa")
        private LocalDateTime task_start;

        @Column(nullable = false)
        @DateTimeFormat(pattern = "dd/MM/yyyy hh:mm:aa")
        private LocalDateTime task_end;

        @Column(nullable = false)
        @Enumerated(EnumType.STRING)
        private EStatusTask task_status = EStatusTask.INATIVA;

        @ManyToOne(optional = false)
        @JoinColumn(name = "task_subject_fk")
        private Subject subject;

        @ManyToOne(optional = false)
        @JoinColumn(name = "task_type_task_fk")
        private TypeTask typeTask;
        
             
}
