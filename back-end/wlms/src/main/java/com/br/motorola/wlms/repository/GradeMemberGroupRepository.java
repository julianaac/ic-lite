package com.br.motorola.wlms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.motorola.wlms.model.GradeMemberGroup;

public interface GradeMemberGroupRepository extends JpaRepository<GradeMemberGroup, Long>{
    @Query("SELECT gm FROM GradeMemberGroup gm" +
        " LEFT JOIN GroupAnswer ga ON ga.group_answer_id = gm.groupAnswer" +
        " LEFT JOIN GroupTask g ON g.group_id = ga.group" +
        " LEFT JOIN Student st ON st.student_id = gm.student" +
        " LEFT JOIN User u ON u.user_id = st.user" +
        " WHERE g.group_name LIKE %?1%" +
        " OR u.user_name LIKE %?1%")
    List<GradeMemberGroup> findByAll(String nome);
}
