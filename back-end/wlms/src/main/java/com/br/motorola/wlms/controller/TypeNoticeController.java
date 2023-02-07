package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.motorola.wlms.model.TypeNotice;
import com.br.motorola.wlms.service.TypeNoticeService;
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
@RequestMapping("/typenotice")
public class TypeNoticeController implements ICrudController<TypeNotice>{

    private TypeNoticeService service;

    @Autowired
    public TypeNoticeController(TypeNoticeService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<TypeNotice>> getAll() {
        List<TypeNotice> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<TypeNotice> getById(@PathVariable("id") Long id) {
        TypeNotice registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<TypeNotice>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<TypeNotice> registros = service.getByAll(termoBusca);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<TypeNotice> insert(@RequestBody TypeNotice objeto) {
        TypeNotice registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<TypeNotice> update(@RequestBody TypeNotice objeto) {
        TypeNotice registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
