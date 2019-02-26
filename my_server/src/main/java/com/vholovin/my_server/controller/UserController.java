package com.vholovin.my_server.controller;

import com.vholovin.my_server.domain.User;
import com.vholovin.my_server.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    private IUserService userService;


    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public ResponseEntity<User> signUp(@RequestBody User user) {
        user = userService.save(user);
        ResponseEntity<User> responseEntity;

        if (user != null) {
            responseEntity = new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            responseEntity = new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }

        return responseEntity;
    }
}
