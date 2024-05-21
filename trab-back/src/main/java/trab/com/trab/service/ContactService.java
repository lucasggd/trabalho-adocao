package trab.com.trab.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import trab.com.trab.model.Contact;
import trab.com.trab.repository.ContactRepository;

import java.util.List;


@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public Contact save(Contact contact){
        return contactRepository.save(contact);
    }

    public List<Contact> findAll(){
        return contactRepository.findAllByOrderByIdDesc();
    }

    public void deleteContact(Long id){
        contactRepository.deleteById(id);
    }
}