package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{
    @Query("SELECT s FROM Student s" +
        " LEFT JOIN User u ON u.user_id = s.user" +
        " WHERE u.user_name LIKE %?1%" +
        " OR u.user_cpf LIKE %?1%" +
        " OR u.user_user LIKE %?1%")
    List<Student> findByAll(String nome);

    @Query("SELECT se FROM Student se" +
    " WHERE se.user.user_id = ?1")
    Student findByUser(Long id);
}
