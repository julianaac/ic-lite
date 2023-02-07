package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.motorola.wlms.model.TechnicalSupport;
import com.br.motorola.wlms.service.TechnicalSupportService;
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
@RequestMapping("/technicalsupport")
public class TechnicalSupportController implements ICrudController<TechnicalSupport>{

    private TechnicalSupportService service;

    @Autowired
    public TechnicalSupportController(TechnicalSupportService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<TechnicalSupport>> getAll() {
        List<TechnicalSupport> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<TechnicalSupport> getById(@PathVariable("id") Long id) {
        TechnicalSupport registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<TechnicalSupport>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<TechnicalSupport> registros = service.getByAll(termoBusca);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<TechnicalSupport> insert(@RequestBody TechnicalSupport objeto) {
        TechnicalSupport registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<TechnicalSupport> update(@RequestBody TechnicalSupport objeto) {
        TechnicalSupport registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("/status/next/{id}")
    public ResponseEntity<TechnicalSupport> nextStatus(@PathVariable("id") Long id) {
        TechnicalSupport registro = service.nextStatus(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
    @PutMapping("/status/previous/{id}")
    public ResponseEntity<TechnicalSupport> previousStatus(@PathVariable("id") Long id) {
        TechnicalSupport registro = service.previousStatus(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
}
