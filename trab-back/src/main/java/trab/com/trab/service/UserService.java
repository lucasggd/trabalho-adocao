package trab.com.trab.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import trab.com.trab.model.Animal;
import trab.com.trab.model.User;
import trab.com.trab.model.UserPassword;
import trab.com.trab.model.dto.AnimalDTO;
import trab.com.trab.model.dto.UserDTO;
import trab.com.trab.repository.UserPasswordRepository;
import trab.com.trab.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserPasswordRepository userPasswordRepository;

    @Autowired
    private AuthenticateService authenticateService;

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public List<User> findAll() {
        return userRepository.findAllByOrderByIdDesc();
    }

    public User newUser(UserDTO userDTO) {
        var user = userRepository.save(new User(userDTO));

        userPasswordRepository.save(new UserPassword(user.getId(), authenticateService.passwordToMD5(userDTO.getPassword())));

        return user;
    }

    public void deleteUser(Long id) {
        var user = userPasswordRepository.findByUserId(id);
        if (user.isPresent()) {}
            userPasswordRepository.deleteById(user.get().getId());
        userRepository.deleteById(id);
    }

    public User update(UserDTO userDTO) {
        var user = userRepository.findById(userDTO.getId()).get();
        var userPass = userPasswordRepository.findByUserId(userDTO.getId()).get();

        user.setUsername(userDTO.getUsername());
        userPass.setPassword(authenticateService.passwordToMD5(userDTO.getPassword()));

        userRepository.save(user);
        userPasswordRepository.save(userPass);

        return user;
    }
}
