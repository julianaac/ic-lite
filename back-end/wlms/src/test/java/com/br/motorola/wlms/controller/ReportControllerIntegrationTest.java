package com.br.motorola.wlms.controller;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.br.motorola.wlms.repository.ReportRepository;

@SpringBootTest
@AutoConfigureTestDatabase
@AutoConfigureMockMvc
public class ReportControllerIntegrationTest {

    private final MockMvc mock;
    private final ReportRepository repo;
    
    @Autowired
    public ReportControllerIntegrationTest(MockMvc mock, ReportRepository repo) {
        this.mock = mock;
        this.repo = repo;
    }

    @Test
    @WithMockUser
    public void testGetAll() throws Exception {
        mock.perform(MockMvcRequestBuilders.get("/report/")
            .contentType(MediaType.APPLICATION_JSON))
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(5)));
    }
    
}
