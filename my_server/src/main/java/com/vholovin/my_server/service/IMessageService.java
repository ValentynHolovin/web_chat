package com.vholovin.my_server.service;

import com.vholovin.my_server.domain.Message;
import com.vholovin.my_server.domain.User;

public interface IMessageService {

    Message getHelloMessage(User user);

    Message getGoodbyeMessage(User user);
}
