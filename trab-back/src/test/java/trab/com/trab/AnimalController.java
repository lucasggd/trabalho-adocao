package trab.com.trab;

import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import trab.com.trab.model.Animal;
import trab.com.trab.model.dto.AnimalDTO;
import trab.com.trab.service.AnimalService;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

/**
 * @author lucas.dias
 */

@SpringBootTest
@Transactional
public class AnimalController {

    @Autowired
    private AnimalService animalService;

    @Test
    void testeCadastro() {
        AnimalDTO animalDTO = new AnimalDTO();

        animalDTO.setEmail("exemplo@email.com");
        animalDTO.setAnimalName("Rex");
        animalDTO.setColor("Marrom");
        animalDTO.setYears(3L);
        animalDTO.setMonths(6L);
        animalDTO.setDays(15L);
        animalDTO.setCity("Bauru");
        animalDTO.setAbout("Cachorro dócil, adora brincar");
        animalDTO.setGender("Macho");
        animalDTO.setImg("rex.jpg");
        animalDTO.setCastrate(true);
        animalDTO.setVaccines(true);
        animalDTO.setOther("Não possui alergias");
        animalDTO.setPhoneTutor(19999999999L);

        animalService.newRequest(animalDTO);

        Optional<Animal> savedAnimal = animalService.findByName("Rex");
        assertFalse(savedAnimal.isEmpty());
        assertEquals("Rex", savedAnimal.get().getAnimalName());
        assertEquals("Bauru", savedAnimal.get().getCity());
    }

    @Test
    void testeE2E() {
        AnimalDTO animalDTO = new AnimalDTO();

        animalDTO.setEmail("exemplo@email.com");
        animalDTO.setAnimalName("Rex");
        animalDTO.setColor("Marrom");
        animalDTO.setYears(3L);
        animalDTO.setMonths(6L);
        animalDTO.setDays(15L);
        animalDTO.setCity("Bauru");
        animalDTO.setAbout("Cachorro dócil, adora brincar");
        animalDTO.setGender("Macho");
        animalDTO.setImg("rex.jpg");
        animalDTO.setCastrate(true);
        animalDTO.setVaccines(true);
        animalDTO.setOther("Não possui alergias");
        animalDTO.setPhoneTutor(19999999999L);

        var animal = animalService.newRequest(animalDTO);
        animal.setAnimalName("RexUpdated");
        animalService.update(animal);

        Optional<Animal> savedAnimal = animalService.findByName("RexUpdated");
        assertFalse(savedAnimal.isEmpty());

        animalService.deleteById(animal.getId());
        savedAnimal = animalService.findByName("Rex");
        assertTrue(savedAnimal.isEmpty());
    }
}
