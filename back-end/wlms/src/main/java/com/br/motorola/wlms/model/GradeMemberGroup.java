package com.br.motorola.wlms.model;

import java.io.Serializable;

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
public class GradeMemberGroup implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long grade_member_group_id;

    @Column(nullable = false, updatable = false)
    private String grade_member_group_feedback;

    @Column(nullable = false, updatable = false)
    private double grade_member_group_grade;

    @ManyToOne(optional = false)
    @JoinColumn(name = "grade_member_group_group_answer_fk")
    private  GroupAnswer groupAnswer;

    @ManyToOne(optional = false)
    @JoinColumn(name = "grade_member_group_student_fk")
    private Student student;
    
}
