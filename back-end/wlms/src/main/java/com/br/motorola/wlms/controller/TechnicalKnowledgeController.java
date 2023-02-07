package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.motorola.wlms.model.TechnicalKnowledge;
import com.br.motorola.wlms.service.TechnicalKnowledgeService;
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
@RequestMapping("/technicalknowledge")
public class TechnicalKnowledgeController implements ICrudController<TechnicalKnowledge>{

    private TechnicalKnowledgeService service;

    @Autowired
    public TechnicalKnowledgeController(TechnicalKnowledgeService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<TechnicalKnowledge>> getAll() {
        List<TechnicalKnowledge> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<TechnicalKnowledge> getById(@PathVariable("id") Long id) {
        TechnicalKnowledge registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<TechnicalKnowledge>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<TechnicalKnowledge> registros = service.getByAll(termoBusca);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<TechnicalKnowledge> insert(@RequestBody TechnicalKnowledge objeto) {
        TechnicalKnowledge registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<TechnicalKnowledge> update(@RequestBody TechnicalKnowledge objeto) {
        TechnicalKnowledge registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
