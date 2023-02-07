package com.br.motorola.wlms.model;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class EStatusReportTest {

    @Test
    public void testProximo() {
        EStatusReport statusReport = EStatusReport.CRIADO;
        statusReport = statusReport.next();
        assertEquals(EStatusReport.ENVIADO, statusReport);
    }
    
}
