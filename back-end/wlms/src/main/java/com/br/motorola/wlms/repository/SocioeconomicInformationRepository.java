package com.br.motorola.wlms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import com.br.motorola.wlms.model.SocioeconomicInformation;

public interface SocioeconomicInformationRepository extends JpaRepository<SocioeconomicInformation, Long>{
    @Query(
        "SELECT si FROM SocioeconomicInformation si"+
        " LEFT JOIN Student s ON s.socioeconomicInformation = si.socioeconomic_information_id" +
        " LEFT JOIN User u ON u.user_id = s.user" +
        " WHERE u.user_name LIKE %?1%" +
        " OR si.socioeconomic_information_id LIKE %?1%"
    )
    List<SocioeconomicInformation> findByAll(String nome);  
}