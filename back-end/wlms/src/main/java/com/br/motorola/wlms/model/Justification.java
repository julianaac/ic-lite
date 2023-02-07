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
public class Justification implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long justification_id;

    @Column(nullable = false, columnDefinition="text")
    private String justification_text;

    @Column(nullable = false)
    private String justification_file;

    @ManyToOne(optional = false)
    @JoinColumn(name = "justification_student_fk")
    private Student student;
    
    @ManyToOne(optional = false)
    @JoinColumn(name = "justification_record_class_fk")
    private RecordClass recordClass;

    @ManyToOne(optional = false)
    @JoinColumn(name = "justification_absence_fk")
    private Absence absence;
}
