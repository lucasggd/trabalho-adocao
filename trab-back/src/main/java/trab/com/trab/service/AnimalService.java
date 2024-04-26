package trab.com.trab.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import trab.com.trab.model.Animal;
import trab.com.trab.model.dto.AnimalDTO;
import trab.com.trab.repository.AnimalRepository;

@Service
public class AnimalService {

    @Autowired
    private AnimalRepository animalRepository;

    @Autowired
    private UserService userService;

    public Animal newRequest(AnimalDTO animalRequest) {
        return animalRepository.save(new Animal(animalRequest));
    }
}
