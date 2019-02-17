package com.vholovin.my_server.service;

import com.vholovin.my_server.domain.User;

public interface IUserService {

    User getUserById(Long id);

    User getUserByLogin(String login);

    User getUserByEmail(String email);

    User save(User user);
}
