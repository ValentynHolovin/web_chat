package com.vholovin.my_server.controller;

import com.vholovin.my_server.domain.Message;
import com.vholovin.my_server.domain.MessageType;
import com.vholovin.my_server.domain.User;
import com.vholovin.my_server.service.IMessageService;
import com.vholovin.my_server.service.IUserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.socket.messaging.SessionConnectedEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Controller
@CrossOrigin("*")
public class ChatController {

    private static final Logger LOG = Logger.getLogger(ChatController.class);

    @Autowired
    private IMessageService messageService;

    @Autowired
    private IUserService userService;

    @Autowired
    private SimpMessageSendingOperations messagingTemplate;

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public Message sendMessage(@Payload Message message) {
        if (message.getMessageType() != MessageType.USER_JOIN || message.getMessageType() != MessageType.USER_LEAVE) {
            message.setMessageType(MessageType.PUBLIC);
        }

        return message;
    }

    @EventListener
    public void connectListener(SessionConnectedEvent event) {
        LOG.info(String.format("User %s connected.", event.getUser().getName()));

        User user = userService.getUserByLogin(event.getUser().getName());
        Message message = messageService.getHelloMessage(user);

        messagingTemplate.convertAndSend("/topic/public", message);
    }

    @EventListener
    public void disconnectListener(SessionDisconnectEvent event) {
        LOG.info(String.format("User %s disconnected.", event.getUser().getName()));

        User user = userService.getUserByLogin(event.getUser().getName());
        Message message = messageService.getGoodbyeMessage(user);

        messagingTemplate.convertAndSend("/topic/public", message);
    }

    @RequestMapping(value = "/loginError", method = RequestMethod.GET)
    @ResponseBody
    public boolean loginError() {
        return true;
    }

}
