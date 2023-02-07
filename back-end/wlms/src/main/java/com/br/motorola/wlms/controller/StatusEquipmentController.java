package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.motorola.wlms.model.StatusEquipment;
import com.br.motorola.wlms.service.StatusEquipmentService;
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
@RequestMapping("/statusequipment")
public class StatusEquipmentController implements ICrudController<StatusEquipment>{

    private StatusEquipmentService service;

    @Autowired
    public StatusEquipmentController(StatusEquipmentService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<StatusEquipment>> getAll() {
        List<StatusEquipment> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<StatusEquipment> getById(@PathVariable("id") Long id) {
        StatusEquipment registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<StatusEquipment>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<StatusEquipment> registros = service.getByAll(termoBusca);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<StatusEquipment> insert(@RequestBody StatusEquipment objeto) {
        StatusEquipment registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<StatusEquipment> update(@RequestBody StatusEquipment objeto) {
        StatusEquipment registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
