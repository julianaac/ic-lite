package com.br.motorola.wlms.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;

@Getter
@Setter
@Entity
public class SocioeconomicInformation {
  

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(nullable = false, updatable = false)
        private Long socioeconomic_information_id;
        @Column
        private String socioeconomic_information_genre; 
        @Column
        private Date socioeconomic_information_birth_date;
        @Column
        private String socioeconomic_information_ethnicity;
        @Column
        private String socioeconomic_information_marital_status;
        @Column
        private String socioeconomic_information_where_live;
        @Column
        private Integer socioeconomic_information_number_people_home;
        @Column
        private String socioeconomic_information_economic_participation;
        @Column
        private Integer socioeconomic_information_number_children;
        @Column
        private Integer socioeconomic_information_means_transport;
        @Column
        private Boolean socioeconomic_information_if_remunerated;
        @Column
        private String socioeconomic_information_employment_relationship;
        @Column
        private String socioeconomic_information_where_work;
        @Column
        private String socioeconomic_information_monthly_income;
        @Column
        private String socioeconomic_information_where_elementary_school;
        @Column
        private String socioeconomic_information_where_college;
        @Column
        private String socioeconomic_information_formation_area;
        @Column
        private String socioeconomic_information_formation_father;
        @Column
        private String socioeconomic_information_formation_mother;
        @Column
        private String socioeconomic_information_work_father;
        @Column
        private String socioeconomic_information_position_work_father; 
        @Column
        private String socioeconomic_information_work_mother;
        @Column
        private String socioeconomic_information_position_work_mother;
        @Column
        private String socioeconomic_information_access_technology;
        @Column
        private Boolean socioeconomic_information_if_access_internet;      
        @Column
        private String socioeconomic_information_motivation;
        @Column
        private String socioeconomic_information_time_avaliability;
        @Column
        private String socioeconomic_information_where_know;
             
}
