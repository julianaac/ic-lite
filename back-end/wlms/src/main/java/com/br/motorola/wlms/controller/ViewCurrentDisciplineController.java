package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.motorola.wlms.projections.ViewCurrentDiscipline;
import com.br.motorola.wlms.service.ViewCurrentDisciplineService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/viewcurrentdiscipline")
public class ViewCurrentDisciplineController{
    
    private ViewCurrentDisciplineService service;

    @Autowired
    public ViewCurrentDisciplineController(ViewCurrentDisciplineService service) {
        this.service = service;
    }

   
    @GetMapping("/")
    public ResponseEntity<List<ViewCurrentDiscipline>> getAll() {
        List<ViewCurrentDiscipline> records = service.getByAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<List<ViewCurrentDiscipline>> getbyId2(@PathVariable("id") String id) {
        List<ViewCurrentDiscipline> records = service.getById2(id);
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

}
