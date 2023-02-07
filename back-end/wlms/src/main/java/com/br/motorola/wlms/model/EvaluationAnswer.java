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
public class EvaluationAnswer {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private int evaluation_answer_id; 
               
        @Column(nullable = false, updatable = false)
        private String evaluation_answer_name;

        @Column(nullable = false, updatable = false)
        private String evaluation_answer_email;

        @Column(nullable = false, updatable = false)
        private int evaluation_answer_goal_achieved;

        @Column(nullable = false, updatable = false)
        private int evaluation_answer_depth_topic;

        @Column(nullable = false, updatable = false)
        private int evaluation_answer_satisfactory_material;

        @Column(nullable = false, updatable = false)
        private int evaluation_answer_practical_activity;

        @Column(nullable = false, updatable = false)
        private int evaluation_answer_mastery_teacher;

        @Column(nullable = false, updatable = false)
        private int evaluation_answer_discussion_environment;

        @Column(nullable = false, updatable = false)
        private int evaluation_answer_teacher_didactic;

        @Column(nullable = false, updatable = false)
        private int evaluation_answer_ask_question;

        @Column(nullable = false, updatable = false)
        private int evaluation_answer_satisfactory_learning;

        @Column(nullable = false, updatable = false)
        private int evaluation_answer_satisfactory_frequency;

        @Column(nullable = false, updatable = false)
        private int evaluation_answer_satisfactory_infrastructure;

        @Column(nullable = false, updatable = false)
        private int evaluation_answer_satisfactory_themes;

        @Column(nullable = false, updatable = false)
        private boolean evaluation_answer_is_prerequisite;

        @Column(nullable = false, updatable = false)
        private String evaluation_answer_prerequisite;
                       
        @ManyToOne(optional = false)
        @JoinColumn(name = "evaluation_answer_subject_fk")
        private Subject subject;

        @ManyToOne(optional = false)
        @JoinColumn(name = "evaluation_answer_teacher_fk")
        private Teacher teacher;
             
}
