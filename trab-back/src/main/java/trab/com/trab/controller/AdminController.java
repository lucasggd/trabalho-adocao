package trab.com.trab.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import trab.com.trab.model.Animal;
import trab.com.trab.model.dto.AnimalDTO;
import trab.com.trab.service.AnimalService;
import trab.com.trab.service.ContactService;

/**
 * @author lucas.dias
 */
@RestController
@RequestMapping("admin")
public class AdminController {

    @Autowired
    private AnimalService runRequestService;

    @Autowired
    private ContactService contactService;

    @PostMapping("animal/new")
    private ResponseEntity<?> newRequest(@RequestBody AnimalDTO runRequest) {
        return new ResponseEntity<>(runRequestService.newRequest(runRequest), HttpStatus.CREATED);
    }

    @DeleteMapping("animal/delete/{id}")
    private ResponseEntity<?> delete(@PathVariable Long id) {
        runRequestService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("animal")
    private ResponseEntity<?> update(@RequestBody Animal body) {
        return new ResponseEntity<>(runRequestService.update(body), HttpStatus.OK);
    }

    @GetMapping("animal/all")
    private ResponseEntity<?> all() {
        return new ResponseEntity<>(runRequestService.findAll(), HttpStatus.OK);
    }

    @GetMapping("contact/all")
    private ResponseEntity<?> allContact() {
        return new ResponseEntity<>(contactService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("contact/{id}")
    private ResponseEntity<?> deleteContact(@PathVariable Long id) {
        contactService.deleteContact(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
