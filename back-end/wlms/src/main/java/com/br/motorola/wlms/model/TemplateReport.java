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
public class TemplateReport {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long template_report_id; 

        @Column(nullable = false)
        private String template_report_name;

        @Column(nullable = false, columnDefinition="text")
        private String template_report_logo;

        @Column(nullable = false)
        private String template_report_program;

        @Column(nullable = false)
        private String template_report_instituition;

        @Column(nullable = false)
        private String template_report_unit;

        @ManyToOne(optional = false)
        @JoinColumn(name = "template_report_type_report_fk")
        private TypeReport typeReport;

        @ManyToOne(optional = false)
        @JoinColumn(name = "template_report_responsible_fk")
        private User user;          
             
}
