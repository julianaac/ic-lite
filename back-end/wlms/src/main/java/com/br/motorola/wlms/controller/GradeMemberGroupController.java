package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.motorola.wlms.model.GradeMemberGroup;
import com.br.motorola.wlms.service.GradeMemberGroupService;
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
@RequestMapping("/grademembergroup")
public class GradeMemberGroupController implements ICrudController<GradeMemberGroup>{

    private GradeMemberGroupService service;

    @Autowired
    public GradeMemberGroupController(GradeMemberGroupService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<GradeMemberGroup>> getAll() {
        List<GradeMemberGroup> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<GradeMemberGroup> getById(@PathVariable("id") Long id) {
        GradeMemberGroup registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<GradeMemberGroup>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<GradeMemberGroup> registros = service.getByAll(termoBusca);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<GradeMemberGroup> insert(@RequestBody GradeMemberGroup objeto) {
        GradeMemberGroup registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<GradeMemberGroup> update(@RequestBody GradeMemberGroup objeto) {
        GradeMemberGroup registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
