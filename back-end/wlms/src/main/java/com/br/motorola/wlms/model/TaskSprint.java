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
public class TaskSprint {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long task_sprint_id; 

        @Column(nullable = false)
        private String task_sprint_name;

        @Column(nullable = false)
        private String task_sprint_description; 

        @Column(nullable = false)
        private Date task_sprint_start_date;

        @Column(nullable = false)
        private Date task_sprint_end_date;

        @Column(nullable = false)
        private String task_sprint_description_conflict;

        @Column(nullable = false)
        private double task_sprint_completion_level;

        @Column(nullable = false)
        private String task_sprint_responsible_ids;

        @Column(nullable = false)
        private String task_sprint_responsible_conflict_ids;

        @ManyToOne(optional = false)
        @JoinColumn(name = "task_sprint_sprint_fk")
        private Sprint sprint;
        
             
}
