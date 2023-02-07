package com.br.motorola.wlms.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.br.motorola.wlms.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    @Query("SELECT a FROM Admin a" +
    " LEFT JOIN User u ON u.user_id = a.user" +
    " WHERE u.user_name LIKE %?1%" +
    " OR u.user_cpf LIKE %?1%" +
    " OR u.user_user LIKE %?1%")
    List<Admin> findByAll(String nome);
}
