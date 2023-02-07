package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.motorola.wlms.model.GroupAnswer;
import com.br.motorola.wlms.service.GroupAnswerService;
import org.springframework.http.ResponseEntity;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/groupanswer")
public class GroupAnswerController implements ICrudController<GroupAnswer>{

    private GroupAnswerService service;

    @Autowired
    public GroupAnswerController(GroupAnswerService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<GroupAnswer>> getAll() {
        List<GroupAnswer> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<GroupAnswer> getById(@PathVariable("id") Long id) {
        GroupAnswer registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<GroupAnswer>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<GroupAnswer> registros = service.getByAll(termoBusca);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<GroupAnswer> insert(@RequestBody GroupAnswer objeto) {
        GroupAnswer registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<GroupAnswer> update(@RequestBody GroupAnswer objeto) {
        GroupAnswer registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("/status/next/{id}")
    public ResponseEntity<GroupAnswer> nextStatus(@PathVariable("id") Long id) {
        GroupAnswer registro = service.nextStatus(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
    @PutMapping("/status/previous/{id}")
    public ResponseEntity<GroupAnswer> previousStatus(@PathVariable("id") Long id) {
        GroupAnswer registro = service.previousStatus(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
    
}
