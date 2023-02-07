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
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import lombok.*;

@Getter
@Setter
@Entity
public class Report implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long report_id;

    @Lob
    @Column(length=2147483647) 
    private String report_content;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private EStatusReport report_status = EStatusReport.CRIADO;

    @ManyToOne(optional = false)
    @JoinColumn(name = "report_type_report_fk")
    private TypeReport typeReport;

    @ManyToOne(optional = false)
    @JoinColumn(name = "report_user_fk")
    private User user;

    @ManyToOne(optional = false)
    @JoinColumn(name = "report_template_report_fk")
    private TemplateReport templateReport;
}
