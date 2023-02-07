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
public class Student {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long student_id; 

        @ManyToOne(optional = false)
        @JoinColumn(name = "student_classroom_fk")
        private Classroom classroom;

        @OneToOne(optional = false)
        @JoinColumn(name = "student_user_fk")
        User user;

        @OneToOne(optional = false)
        @JoinColumn(name = "student_socioeconomic_information_fk")
        private SocioeconomicInformation socioeconomicInformation;

        @OneToOne(optional = false)
        @JoinColumn(name = "student_technical_knowledge_fk")
        private TechnicalKnowledge technicalKnowledge;

        @ManyToOne
        @JoinColumn(name = "student_modality_fk")
        private Modality modality;
            
}
