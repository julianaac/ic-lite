package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.motorola.wlms.model.StudentEvaluation;
import com.br.motorola.wlms.service.StudentEvaluationService;
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
@RequestMapping("/studentevaluation")
public class StudentEvaluationController implements ICrudController<StudentEvaluation>{

    private StudentEvaluationService service;

    @Autowired
    public StudentEvaluationController(StudentEvaluationService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<StudentEvaluation>> getAll() {
        List<StudentEvaluation> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<StudentEvaluation> getById(@PathVariable("id") Long id) {
        StudentEvaluation registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<StudentEvaluation>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<StudentEvaluation> registros = service.getByAll(termoBusca);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<StudentEvaluation> insert(@RequestBody StudentEvaluation objeto) {
        StudentEvaluation registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<StudentEvaluation> update(@RequestBody StudentEvaluation objeto) {
        StudentEvaluation registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
