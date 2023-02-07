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
import javax.persistence.OneToOne;

import lombok.*;

@Getter
@Setter
@Entity
public class GroupAnswer implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long group_answer_id;

    @Column(nullable = false, columnDefinition="text")
    private String group_answer_content;

    @Column(nullable = false, columnDefinition="text")
    private String group_answer_feedback;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private EStatusTaskAnswer group_answer_status = EStatusTaskAnswer.CRIADA;

    @OneToOne(optional = false)
    @JoinColumn(name = "group_answer_task_fk")
    private Task task;

    @OneToOne(optional = false)
    @JoinColumn(name = "group_answer_group_fk")
    private GroupTask group;
}
