package trab.com.trab.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import trab.com.trab.model.Animal;
import trab.com.trab.model.enums.AnimalStatusEnum;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Long> {

    List<Animal> findByStatusOrderByIdDesc(AnimalStatusEnum status);

    List<Animal> findAllByOrderByIdDesc();

    Optional<Animal> findByAnimalName(String name);
}
