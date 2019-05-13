package testing.domain;

import com.kpi.testing.dao.entity.User;
import com.kpi.testing.dao.memoryStore.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void createUser(String Login, String Password, Boolean Ban_status) {
        User user = new User();
        user.setLogin(Login);
        user.setPassword(Password);
        user.setBan_status(Ban_status);
        userRepository.save(user);
    }

    public void removeUser(Long userId) {
        User user = userRepository.findOne(userId);
        if (Objects.nonNull(user)) {
            userRepository.delete(user);
        }
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
