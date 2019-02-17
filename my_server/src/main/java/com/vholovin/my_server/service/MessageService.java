package com.vholovin.my_server.service;

import com.vholovin.my_server.domain.Message;
import com.vholovin.my_server.domain.MessageType;
import com.vholovin.my_server.domain.User;
import org.springframework.stereotype.Service;

@Service
public class MessageService implements IMessageService {

    public Message getHelloMessage(User user) {
        Message message = new Message();

        message.setMessageType(MessageType.USER_JOIN);
        message.setSender(user);
        message.setMessage(String.format("User %s connected to chat", user.getLogin()));

        return message;
    }

    public Message getGoodbyeMessage(User user) {
        Message message = new Message();

        message.setMessageType(MessageType.USER_LEAVE);
        message.setSender(user);
        message.setMessage(String.format("User %s disconnected from chat", user.getLogin()));

        return message;
    }
}
