package testing.controller;

import com.kpi.testing.dao.entity.BannedUser;
import com.kpi.testing.domain.BannedUserService;
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
        public void banUser(String login, Integer minutes){
            bannedUserService.giveBan(login, Duration.ofMinutes(minutes));
            System.out.println("Ban gived to " + login);
        }


        @ShellMethod("Print all users to shell")
        public List<BannedUser> getAllBannedUsers(){
            return bannedUserService.getAllBannedUsers();
        }
}
