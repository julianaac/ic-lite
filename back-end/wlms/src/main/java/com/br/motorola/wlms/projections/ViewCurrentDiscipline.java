package com.br.motorola.wlms.projections;

import java.time.LocalDateTime;

public interface ViewCurrentDiscipline {
    Long getStudent_id();
    String getUser_name();
    Long getSubject_id();
    String getSubject_name();
    Long getTraining_id();
    String getTraining_name();
    Long getClassroom_id();
    String getClassroom_name();
}
