package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.motorola.wlms.model.EquipmentLocation;
import com.br.motorola.wlms.service.EquipmentLocationService;
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
@RequestMapping("/equipmentlocation")
public class EquipmentLocationController implements ICrudController<EquipmentLocation>{

    private EquipmentLocationService service;

    @Autowired
    public EquipmentLocationController(EquipmentLocationService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<EquipmentLocation>> getAll() {
        List<EquipmentLocation> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<EquipmentLocation> getById(@PathVariable("id") Long id) {
        EquipmentLocation registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<EquipmentLocation>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<EquipmentLocation> registros = service.getByAll(termoBusca);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<EquipmentLocation> insert(@RequestBody EquipmentLocation objeto) {
        EquipmentLocation registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<EquipmentLocation> update(@RequestBody EquipmentLocation objeto) {
        EquipmentLocation registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
