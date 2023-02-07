package com.br.motorola.wlms.model;
import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import org.springframework.format.annotation.DateTimeFormat;
import lombok.*;

@Getter
@Setter
@Entity
public class RecordClass {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long record_class_id; 

        @Column(nullable = false)
        @DateTimeFormat(pattern = "dd/MM/yyyy hh:mm:aa")
        private LocalDateTime record_class_date_entry;
        
        //verificar
        @Column(nullable = false)
        @DateTimeFormat(pattern = "dd/MM/yyyy h:mm a")
        private LocalDateTime record_class_date_exit;
        
        //quando for criado
        @ManyToOne(optional = false)
        @JoinColumn(name = "record_class_classroom_fk")
        private Classroom classroom;

        @ManyToOne(optional = false)
        @JoinColumn(name = "record_class_subject_fk")
        private Subject subject;       
}
