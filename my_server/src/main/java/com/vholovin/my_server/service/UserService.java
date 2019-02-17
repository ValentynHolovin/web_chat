package com.vholovin.my_server.service;

import com.vholovin.my_server.domain.User;
import com.vholovin.my_server.domain.UserRole;
import com.vholovin.my_server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;


    public User getUserById(Long id) {
        return userRepository.getOne(id);
    }

    @Override
    public User getUserByLogin(String login) {
        return userRepository.findByLogin(login);
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User save(User user) {
        if (getUserByLogin(user.getLogin()) == null && getUserByEmail(user.getEmail()) == null) {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            user.setRole(UserRole.USER);

            return userRepository.save(user);
        }

        return null;
    }
}
