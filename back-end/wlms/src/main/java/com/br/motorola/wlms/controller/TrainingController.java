package com.br.motorola.wlms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.motorola.wlms.model.Training;
import com.br.motorola.wlms.service.TrainingService;

@RestController
@RequestMapping("/training")
public class TrainingController implements ICrudController<Training> {
    
    private TrainingService service;

    @Autowired
    public TrainingController(TrainingService service){
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<Training>> getAll() {
        List<Training> registers = service.getAll();
        return new ResponseEntity<>(registers, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Training> getById(@PathVariable("id") Long id) {
        Training register = service.getById(id);
        return new ResponseEntity<>(register, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<Training>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<Training> registers = service.getByAll(termoBusca);
        return new ResponseEntity<>(registers, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<Training> insert(@RequestBody Training objeto) {
        Training register = service.save(objeto);
        return new ResponseEntity<>(register, HttpStatus.CREATED); 
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<Training> update(@RequestBody Training objeto) {
        Training register = service.save(objeto);
        return new ResponseEntity<>(register, HttpStatus.CREATED); 
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<Training> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

   
}
