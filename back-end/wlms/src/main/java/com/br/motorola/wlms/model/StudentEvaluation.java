package com.br.motorola.wlms.model;

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
public class StudentEvaluation {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long student_evaluation_id; 
       
        
        @Column(nullable = false)
        private boolean student_evaluation_is_answer;
        
        @ManyToOne(optional = false)
        @JoinColumn(name = "student_evaluation_subject_fk")
        private Subject subject; 


        @ManyToOne(optional = false)
        @JoinColumn(name = "student_evaluation_student_fk")
        private Student student;
        
        @ManyToOne(optional = false)
        @JoinColumn(name = "student_evaluation_teacher_fk")
        private Teacher teacher;

        @ManyToOne(optional = false)
        @JoinColumn(name = "student_evaluation_training_fk")
        private Training training;
             
}
