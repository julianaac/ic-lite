package com.br.motorola.wlms.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.motorola.wlms.model.Task;
import com.br.motorola.wlms.service.TaskService;
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
@RequestMapping("/task")
public class TaskController implements ICrudController<Task>{

    private TaskService service;

    @Autowired
    public TaskController(TaskService service) {
        this.service = service;
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<Task>> getAll() {
        List<Task> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Task> getById(@PathVariable("id") Long id) {
        Task registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<Task>> getByAll(@PathVariable("termoBusca") String termoBusca) {
        List<Task> registros = service.getByAll(termoBusca);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<Task> insert(@RequestBody Task objeto) {
        Task registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<Task> update(@RequestBody Task objeto) {
        Task registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("/status/next/{id}")
    public ResponseEntity<Task> nextStatus(@PathVariable("id") Long id) {
        Task registro = service.nextStatus(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
    @PutMapping("/status/previous/{id}")
    public ResponseEntity<Task> previousStatus(@PathVariable("id") Long id) {
        Task registro = service.previousStatus(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
}
