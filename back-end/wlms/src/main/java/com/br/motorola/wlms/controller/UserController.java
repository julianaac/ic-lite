package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.motorola.wlms.model.User;
import com.br.motorola.wlms.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/user")
public class UserController implements ICrudController<User> {
    
    private UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<User>> getAll() {
        List<User> records = service.getAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable("id") Long id) {
        User record = service.getById(id);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<User>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<User> records = service.getByAll(termoBusca);
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/busca/cor")
    public ResponseEntity<List<User>> getByCor() {
        List<User> records = service.getByType();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<User> insert(@RequestBody User objeto) {
        User record = service.save(objeto);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<User> update(@RequestBody User objeto) {
        User record = service.save(objeto);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}/{situation_id}")
    public ResponseEntity<User> updateSituation(@PathVariable("id") Long id, @PathVariable("situation_id") Long situation_id) {
        service.updateSituation(id, situation_id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
