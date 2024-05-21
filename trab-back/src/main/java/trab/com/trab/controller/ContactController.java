package trab.com.trab.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import trab.com.trab.model.Contact;
import trab.com.trab.service.AnimalService;
import trab.com.trab.service.ContactService;

@RestController
@RequestMapping("contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("")
    private ResponseEntity<?> save(@RequestBody Contact contact) {
        return new ResponseEntity<>(contactService.save(contact), HttpStatus.OK);
    }

}
