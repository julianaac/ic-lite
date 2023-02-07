package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.motorola.wlms.model.Checkin;
import com.br.motorola.wlms.service.CheckinService;
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
@RequestMapping("/checkin")
public class CheckinController implements ICrudController<Checkin>{

    private CheckinService service;

    @Autowired
    public CheckinController(CheckinService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<Checkin>> getAll() {
        List<Checkin> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Checkin> getById(@PathVariable("id") Long id) {
        Checkin registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
    @GetMapping("/findcheckincurrent/{id}")
    public ResponseEntity<Checkin> findCheckinCurrent(@PathVariable("id") Long id) {
        Checkin registro = service.findCheckinCurrent(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
    //função para otimizar o checkin no front sumiria a view e compararia apenas o check
    // @GetMapping("/findcheckincurrent/date/{id}")
    // public ResponseEntity<Checkin> findCheckinCurrentDate(@PathVariable("id") Long id) {
    //     Checkin registro = service.findCheckinCurrent(id);
    //     return new ResponseEntity<>(registro, HttpStatus.OK);
    // }
    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<Checkin>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<Checkin> registros = service.getByAll(termoBusca);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    
    public ResponseEntity<Checkin> insert(@RequestBody Checkin objeto) {
        Checkin registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<Checkin> update(@RequestBody Checkin objeto) {
        Checkin registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
