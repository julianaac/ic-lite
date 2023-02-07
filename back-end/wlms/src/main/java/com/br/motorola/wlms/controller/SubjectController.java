package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.motorola.wlms.model.Subject;
import com.br.motorola.wlms.service.SubjectService;
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
@RequestMapping("/subject")
public class SubjectController implements ICrudController<Subject>{

    private SubjectService service;

    @Autowired
    public SubjectController(SubjectService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<Subject>> getAll() {
        List<Subject> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Subject> getById(@PathVariable("id") Long id) {
        Subject registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @GetMapping("/currentsubject/{id}")
    public ResponseEntity<Subject> getCurrentSubject(@PathVariable("id") Long id) {
        Subject registro = service.getCurrentSubject(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
    @GetMapping("/subjectteacher/{id}")
    public ResponseEntity<List<Subject>> getSubjectTeacher(@PathVariable("id") Long id) {
        List<Subject> registro = service.getSubjectTeacher(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }


    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<Subject>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<Subject> registros = service.getByAll(termoBusca);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<Subject> insert(@RequestBody Subject objeto) {
        Subject registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<Subject> update(@RequestBody Subject objeto) {
        Subject registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
