package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.motorola.wlms.model.TypeUser;
import com.br.motorola.wlms.service.TypeUserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/typeuser")
public class TypeUserController implements ICrudController<TypeUser> {
    
    private TypeUserService service;

    @Autowired
    public TypeUserController(TypeUserService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<TypeUser>> getAll() {
        List<TypeUser> records = service.getAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<TypeUser> getById(@PathVariable("id") Long id) {
        TypeUser record = service.getById(id);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<TypeUser>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<TypeUser> records = service.getByAll(termoBusca);
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<TypeUser> insert(@RequestBody TypeUser objeto) {
        TypeUser record = service.save(objeto);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<TypeUser> update(@RequestBody TypeUser objeto) {
        TypeUser record = service.save(objeto);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
