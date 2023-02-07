package com.br.motorola.wlms.projections;

import java.time.LocalDateTime;

public interface ViewCheckinStudent {
    Long getStudent_id();
    String getStudent_name();
    Long getStudent_classroom_fk();
    String getSubject_name();
    LocalDateTime getCheckin_entry();
    LocalDateTime getCheckin_exit();
    Long getAmount_hours();
}
