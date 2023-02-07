package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.motorola.wlms.model.SingleAnswer;
import com.br.motorola.wlms.service.SingleAnswerService;
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
@RequestMapping("/singleanswer")
public class SingleAnswerController implements ICrudController<SingleAnswer>{

    private SingleAnswerService service;

    @Autowired
    public SingleAnswerController(SingleAnswerService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<SingleAnswer>> getAll() {
        List<SingleAnswer> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<SingleAnswer> getById(@PathVariable("id") Long id) {
        SingleAnswer registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<SingleAnswer>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<SingleAnswer> registros = service.getByAll(termoBusca);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<SingleAnswer> insert(@RequestBody SingleAnswer objeto) {
        SingleAnswer registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<SingleAnswer> update(@RequestBody SingleAnswer objeto) {
        SingleAnswer registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("/status/next/{id}")
    public ResponseEntity<SingleAnswer> nextStatus(@PathVariable("id") Long id) {
        SingleAnswer registro = service.nextStatus(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
    @PutMapping("/status/previous/{id}")
    public ResponseEntity<SingleAnswer> previousStatus(@PathVariable("id") Long id) {
        SingleAnswer registro = service.previousStatus(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
    
}
