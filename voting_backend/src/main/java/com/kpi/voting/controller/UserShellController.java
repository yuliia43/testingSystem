package com.kpi.voting.controller;

import com.kpi.voting.dao.entity.User;
import com.kpi.voting.domain.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

import java.util.List;

@ShellComponent
public class UserShellController {

    @Autowired
    private UserService userService;

    @ShellMethod("Create user from shell")
    public void createUser(String name){
        userService.createUser(name);
        System.out.println("User created "+ name);
    }

    @ShellMethod("Print all users to shell")
    public List<User> getAllUser(){
        return userService.getAllUsers();
    }
}
