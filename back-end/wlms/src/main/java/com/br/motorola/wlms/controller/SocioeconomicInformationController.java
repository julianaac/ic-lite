package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.motorola.wlms.model.SocioeconomicInformation;
import com.br.motorola.wlms.service.SocioeconomicInformationService;
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
@RequestMapping("/socioeconomicinformation")
public class SocioeconomicInformationController implements ICrudController<SocioeconomicInformation>{

    private SocioeconomicInformationService service;

    @Autowired
    public SocioeconomicInformationController(SocioeconomicInformationService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<SocioeconomicInformation>> getAll() {
        List<SocioeconomicInformation> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<SocioeconomicInformation> getById(@PathVariable("id") Long id) {
        SocioeconomicInformation registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<SocioeconomicInformation>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<SocioeconomicInformation> registros = service.getByAll(termoBusca);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<SocioeconomicInformation> insert(@RequestBody SocioeconomicInformation objeto) {
        SocioeconomicInformation registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<SocioeconomicInformation> update(@RequestBody SocioeconomicInformation objeto) {
        SocioeconomicInformation registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
