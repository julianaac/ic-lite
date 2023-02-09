package com.br.motorola.wlms.controller;
// PARA TER CERTEZA QUE DEU CERTO
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.motorola.wlms.model.Absence;
import com.br.motorola.wlms.service.AbsenceService;
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
@RequestMapping("/absence")
public class AbsenceController implements ICrudController<Absence>{

    private AbsenceService service;

    @Autowired
    public AbsenceController(AbsenceService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<Absence>> getAll() {
        List<Absence> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Absence> getById(@PathVariable("id") Long id) {
        Absence registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<Absence>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<Absence> registros = service.getByAll(termoBusca);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<Absence> insert(@RequestBody Absence objeto) {
        Absence registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<Absence> update(@RequestBody Absence objeto) {
        Absence registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
