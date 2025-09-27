package trab.com.trab.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import trab.com.trab.model.UserPassword;

import java.util.Optional;

@Repository
public interface UserPasswordRepository extends JpaRepository<UserPassword, Long> {

    Optional<UserPassword> findByUserUsernameAndPassword(String username, String password);

    Optional<UserPassword> findByUserId(Long id);

}
