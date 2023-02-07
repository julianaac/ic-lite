package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.motorola.wlms.projections.ViewCoordenadorProjeto;
import com.br.motorola.wlms.service.ViewCoordenadorProjetoService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/viewcoordenadorprojeto")
public class ViewCoordenadorProjetoController{
    
    private ViewCoordenadorProjetoService service;

    @Autowired
    public ViewCoordenadorProjetoController(ViewCoordenadorProjetoService service) {
        this.service = service;
    }

   
    @GetMapping("/")
    public ResponseEntity<List<ViewCoordenadorProjeto>> getAll() {
        List<ViewCoordenadorProjeto> records = service.getByAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

}
