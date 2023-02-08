package com.br.motorola.wlms.controller;

import java.util.ArrayList;
import java.util.List;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.br.motorola.wlms.model.Report;
import com.br.motorola.wlms.model.User;
import com.br.motorola.wlms.model.TemplateReport;
import com.br.motorola.wlms.model.TypeReport;
import com.br.motorola.wlms.model.EStatusReport;
import com.br.motorola.wlms.service.ReportService;
import com.br.motorola.wlms.service.UserService;



@WebMvcTest(ReportController.class)
public class ReportControllerTest {

    @MockBean
    private ReportService servico;

    @MockBean
    private UserService userService;
    

    private final MockMvc mock;


    @Autowired
    public ReportControllerTest(MockMvc mock) {
        this.mock = mock;
    }

    @Test
    @WithMockUser
    public void testGetAll() throws Exception {

        TemplateReport templateReport = new TemplateReport();
        templateReport.setTemplate_report_id(1L);

        TypeReport typeReport = new TypeReport();
        typeReport.setType_report_id(1L);

        User user = new User();
        user.setUser_id(1L);

        
        Report report = new Report();
        report.setReport_id(1L);
        report.setReport_content("content");
        report.setTemplateReport(templateReport);
        report.setTypeReport(typeReport);
        report.setUser(user);
        report.setReport_status(EStatusReport.CRIADO);
        
        List<Report> registros = new ArrayList<>();
        registros.add(report);

        Mockito.when(servico.getAll()).thenReturn(registros);
        mock.perform(MockMvcRequestBuilders.get("/report/")
            .contentType(MediaType.APPLICATION_JSON))
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(1)))
            .andExpect(MockMvcResultMatchers.jsonPath("$[0].report_status", Matchers.is(EStatusReport.CRIADO.toString())));
    }
    
}
