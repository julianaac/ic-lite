package com.br.motorola.wlms.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.motorola.wlms.model.User;
import com.br.motorola.wlms.service.UserService;


@RestController
@RequestMapping("/user_info")
public class LoginController {

    private final UserService servico;

    @Autowired
    public LoginController(
        UserService servico
    ) {
        this.servico = servico;
    }

    @GetMapping("/")
    public ResponseEntity<User> getUsuario() {
        Principal principal = SecurityContextHolder.getContext().getAuthentication();
        User user = servico.getByUserUser(principal.getName());
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    
}
