package com.br.motorola.wlms.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.*;
@Entity
public class User implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long user_id;

    @Column(nullable = false)
    private String user_name;

    @Column(nullable = false)
    private String user_user;

    @Column(nullable = false)
    @JsonProperty(access = Access.WRITE_ONLY)
    private String user_password;

    @Column(nullable = false)
    private String user_cpf;

    @Column(nullable = false)
    private String user_registration;

    @Column(nullable = false)
    private String user_curriculum_vitae;

    @Column(nullable = false)
    private String user_email;

    @Column
    private String user_git;

    @Column(nullable = false)
    private String user_telephone;
    // Talvez receba null
    @Column(nullable = false, columnDefinition = "text")
    private String user_small_bibliography;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_situation_fk")
    private Situation situation;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_type_user_fk")
    private TypeUser typeUser;

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_user() {
        return user_user;
    }

    public void setUser_user(String user_user) {
        this.user_user = user_user;
    }

    public String getUser_password() {
        return user_password;
    }

   
    public void setUser_password(String user_password) {
        setUser_password(user_password, true);
    }

    public void setUser_password(String user_password, boolean encrypt) {
        if (user_password != null && encrypt) {
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            user_password = passwordEncoder.encode(user_password);
        }
        this.user_password = user_password;
    }
    public String getUser_cpf() {
        return user_cpf;
    }

    public void setUser_cpf(String user_cpf) {
        this.user_cpf = user_cpf;
    }

    public String getUser_registration() {
        return user_registration;
    }

    public void setUser_registration(String user_registration) {
        this.user_registration = user_registration;
    }

    public String getUser_curriculum_vitae() {
        return user_curriculum_vitae;
    }

    public void setUser_curriculum_vitae(String user_curriculum_vitae) {
        this.user_curriculum_vitae = user_curriculum_vitae;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_git() {
        return user_git;
    }

    public void setUser_git(String user_git) {
        this.user_git = user_git;
    }

    public String getUser_telephone() {
        return user_telephone;
    }

    public void setUser_telephone(String user_telephone) {
        this.user_telephone = user_telephone;
    }

    public String getUser_small_bibliography() {
        return user_small_bibliography;
    }

    public void setUser_small_bibliography(String user_small_bibliography) {
        this.user_small_bibliography = user_small_bibliography;
    }

    public Situation getSituation() {
        return situation;
    }

    public void setSituation(Situation situation) {
        this.situation = situation;
    }

    public TypeUser getTypeUser() {
        return typeUser;
    }

    public void setTypeUser(TypeUser typeUser) {
        this.typeUser = typeUser;
    }
}
