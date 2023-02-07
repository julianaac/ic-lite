package com.br.motorola.wlms.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.*;

@Getter
@Setter
@Entity
public class SingleAnswer implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long single_answer_id;

    @Column(nullable = false, columnDefinition = "text")
    private String single_answer_content;

    @Column(columnDefinition = "text")
    private String single_answer_feedback;

    @Column
    private Long single_answer_grade;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private EStatusTaskAnswer single_answer_status = EStatusTaskAnswer.CRIADA;
    
    @ManyToOne(optional = false)
    @JoinColumn(name = "single_answer_user_fk")
    private User user;

    @ManyToOne(optional = false)
    @JoinColumn(name = "single_answer_task_fk")
    private Task task;


    
}
