package com.kpi.voting.controller;

import com.kpi.voting.dao.entity.BannedUser;
import com.kpi.voting.domain.BannedUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

import java.time.Duration;
import java.util.List;

@ShellComponent
public class BannedUserShellController {
        @Autowired
        private BannedUserService bannedUserService;

        @ShellMethod("Ban user from shell")
        public void banUser(String login, Duration time){
            bannedUserService.giveBan(login, time);
            System.out.println("Ban gived to " + login);
        }


        @ShellMethod("Print all users to shell")
        public List<BannedUser> getAllBannedUsers(){
            return bannedUserService.getAllBannedUsers();
        }
}
