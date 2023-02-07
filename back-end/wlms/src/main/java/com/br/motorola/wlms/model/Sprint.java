package com.br.motorola.wlms.model;

import java.io.Serializable;
import java.sql.Date;

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
public class Sprint implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long sprint_id;

    @Column(nullable = false)
    private String sprint_name;

    @Column(nullable = false)
    private Date sprint_start_date;

    @Column(nullable = false)
    private Date sprint_end_date;

    @Column(nullable = false)
    private String sprint_technology_ids;

    @ManyToOne(optional = false)
    @JoinColumn(name = "sprint_team_fk")
    private Team team;

    @ManyToOne(optional = false)
    @JoinColumn(name = "sprint_scrum_master_fk")
    private User user;
    
}
