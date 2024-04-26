package trab.com.trab.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import trab.com.trab.model.UserPassword;
import trab.com.trab.repository.UserPasswordRepository;

@Service
public class UserPasswordService {

    @Autowired
    private UserPasswordRepository userPasswordRepository;

    public void newPassword(Long userId, String password){
        userPasswordRepository.save(new UserPassword(userId, password));
    }
}
