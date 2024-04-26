package trab.com.trab.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import trab.com.trab.model.dto.UserDTO;
import trab.com.trab.service.AuthenticateService;

@Controller
@RestController
@RequestMapping("/authenticate")
public class AuthenticateController {

    @Autowired
    private AuthenticateService service;
    @PostMapping("")
    private ResponseEntity<?> login(@RequestBody UserDTO user) {
        return new ResponseEntity<>(service.authenticate(user.getUsername(), user.getPassword()), HttpStatus.CREATED);
    }
}
