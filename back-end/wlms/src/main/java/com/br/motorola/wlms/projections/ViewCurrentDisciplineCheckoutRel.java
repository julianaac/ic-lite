package com.br.motorola.wlms.projections;

import java.time.LocalDateTime;

public interface ViewCurrentDisciplineCheckoutRel {
    Long getStudent_id();
    Long getUser_id();
    Long getCheckin_id();
    Integer getCheckin_status();
}
