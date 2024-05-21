package trab.com.trab.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.test.util.AssertionErrors;
import trab.com.trab.model.Animal;
import trab.com.trab.model.dto.AnimalDTO;
import trab.com.trab.model.enums.AnimalStatusEnum;
import trab.com.trab.repository.AnimalRepository;

import java.util.List;

@Service
public class AnimalService {

    @Autowired
    private AnimalRepository animalRepository;

    @Autowired
    private UserService userService;

    public Animal newRequest(AnimalDTO animalRequest) {
        return animalRepository.save(new Animal(animalRequest));
    }

    public List<Animal> findAllAccepted() {
        return animalRepository.findByStatusOrderByIdDesc(AnimalStatusEnum.ACCEPT);
    }

    public List<Animal> findAll() {
        return animalRepository.findAllByOrderByIdDesc();
    }

    public void deleteById(Long id){
        animalRepository.deleteById(id);
    }

    public Animal update(Animal animal){
        return animalRepository.save(animal);
    }
}
