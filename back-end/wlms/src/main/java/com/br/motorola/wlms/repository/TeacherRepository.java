package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
    @Query("SELECT t FROM Teacher t" +
    " LEFT JOIN User u ON u.user_id = t.user" +
    " WHERE u.user_name LIKE %?1%" +
    " OR u.user_cpf LIKE %?1%" +
    " OR u.user_user LIKE %?1%")
    List<Teacher> findByAll(String nome);
}
