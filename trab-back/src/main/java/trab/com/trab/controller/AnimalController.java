package trab.com.trab.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import trab.com.trab.model.dto.AnimalDTO;
import trab.com.trab.service.AnimalService;

@RestController
@RequestMapping("animal")
public class AnimalController {

    @Autowired
    private AnimalService runRequestService;

    @GetMapping("")
    private ResponseEntity<?> all() {
        return new ResponseEntity<>(runRequestService.findAllAccepted(), HttpStatus.OK);
    }

}
