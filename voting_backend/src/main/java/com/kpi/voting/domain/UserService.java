package com.kpi.voting.domain;

import com.kpi.voting.dao.entity.User;
import com.kpi.voting.dao.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public void createUser(String name){
        User user = new User();
        user.setName(name);
        userRepository.save(user);
    }

    public void removeUser(Long id){
        Optional<User> user = userRepository.findById(id);
        user.ifPresent(user1 -> userRepository.delete(user1));
    }

    public List<User> getAllUsers(){
        return  userRepository.findAll();
    }

}
