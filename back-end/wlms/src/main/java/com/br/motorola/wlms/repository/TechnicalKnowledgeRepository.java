package com.br.motorola.wlms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import com.br.motorola.wlms.model.TechnicalKnowledge;

public interface TechnicalKnowledgeRepository extends JpaRepository<TechnicalKnowledge, Long>{
    @Query(
        "SELECT tk FROM TechnicalKnowledge tk"+
        " LEFT JOIN Student s ON s.technicalKnowledge = tk.technical_knowledge_id" +
        " LEFT JOIN User u ON u.user_id = s.user" +
        " WHERE u.user_name LIKE %?1%"
    )
    List<TechnicalKnowledge> findByAll(String nome);  
}