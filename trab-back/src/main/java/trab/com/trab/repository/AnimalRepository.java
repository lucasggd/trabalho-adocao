package trab.com.trab.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import trab.com.trab.model.Animal;
import trab.com.trab.model.enums.AnimalStatusEnum;

import java.util.List;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Long> {

    List<Animal> findByStatus(AnimalStatusEnum status);

}
