package com.br.motorola.wlms.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u" +
    " LEFT JOIN TypeUser tu ON tu.type_user_id = u.typeUser" +
    " LEFT JOIN Situation s ON s.situation_id = u.situation" +
        " WHERE u.user_name LIKE %?1%" +
        " OR u.user_cpf LIKE %?1%" +
        " OR u.user_registration LIKE %?1%" +
        " OR u.user_telephone LIKE %?1%" +
        " OR u.user_email LIKE %?1%" +
        " OR s.situation_name LIKE %?1%" +
        " OR tu.type_user_name LIKE %?1%" +
        " OR u.user_git LIKE %?1%")
    List<User> findByAll(String nome);
    
    @Query("SELECT u FROM User u" +
        " WHERE u.typeUser = 1")
    List<User> findByCor();
    
    @Query("SELECT u FROM User u" +
        " WHERE u.user_user LIKE %?1%")
    User findByUser_User(String user);
    
    
}
