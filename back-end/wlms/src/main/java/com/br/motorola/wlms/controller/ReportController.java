package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.motorola.wlms.model.Report;
import com.br.motorola.wlms.service.ReportService;
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
@RequestMapping("/report")
public class ReportController implements ICrudController<Report>{

    private ReportService service;

    @Autowired
    public ReportController(ReportService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<Report>> getAll() {
        List<Report> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Report> getById(@PathVariable("id") Long id) {
        Report registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<Report>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<Report> registros = service.getByAll(termoBusca);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<Report> insert(@RequestBody Report objeto) {
        Report registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<Report> update(@RequestBody Report objeto) {
        Report registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("/status/next/{id}")
    public ResponseEntity<Report> nextStatus(@PathVariable("id") Long id) {
        Report registro = service.nextStatus(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
    @PutMapping("/status/previous/{id}")
    public ResponseEntity<Report> previousStatus(@PathVariable("id") Long id) {
        Report registro = service.previousStatus(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
    
}
