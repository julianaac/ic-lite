package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.motorola.wlms.projections.ViewCurrentDisciplineCheckoutRel;
import com.br.motorola.wlms.service.ViewCurrentDisciplineCheckoutRelService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/viewcurrentdisciplinecheckoutrel")
public class ViewCurrentDisciplineCheckoutRelController{
    
    private ViewCurrentDisciplineCheckoutRelService service;

    @Autowired
    public ViewCurrentDisciplineCheckoutRelController(ViewCurrentDisciplineCheckoutRelService service) {
        this.service = service;
    }

   
    @GetMapping("/")
    public ResponseEntity<List<ViewCurrentDisciplineCheckoutRel>> getAll() {
        List<ViewCurrentDisciplineCheckoutRel> records = service.getByAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<ViewCurrentDisciplineCheckoutRel> getbyId2(@PathVariable("id") Long id) {
        ViewCurrentDisciplineCheckoutRel records = service.getById2(id);
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

}
