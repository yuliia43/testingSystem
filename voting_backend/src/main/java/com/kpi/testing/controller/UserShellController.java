package testing.controller;

import com.kpi.testing.dao.entity.User;
import com.kpi.testing.domain.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@ShellComponent
public class UserShellController {

    @Autowired
    private UserService userService;
    @ShellMethod("Create_user_from_shell")
    public @ResponseBody
    void createUser(@RequestBody String Login, @RequestBody String Password){
        userService.createUser(Login, Password, false);
        System.out.println("User created "+ Login);
    }
    @ShellMethod("Print all users to shell")
    public @ResponseBody
    List<User> getAllUsers(){
        userService.getAllUsers().forEach(user1 ->System.out.println("User: " + user1.getLogin()));
        return userService.getAllUsers();
    }
}
