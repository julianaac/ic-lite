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
public class Notice implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long notice_id;

    @Column(nullable = false)
    private String notice_title;

    @Column(nullable = false, columnDefinition="text")
    private String notice_text;
    
    @ManyToOne(optional = false)
    @JoinColumn(name = "notice_training_fk")
    private Training training;

    @ManyToOne(optional = false)
    @JoinColumn(name = "notice_type_notice_fk")
    private TypeNotice typeNotice;

    @ManyToOne(optional = false)
    @JoinColumn(name = "notice_classroom_fk")
    private Classroom classroom;

}
