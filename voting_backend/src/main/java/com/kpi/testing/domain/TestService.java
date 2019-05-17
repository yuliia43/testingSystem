package com.kpi.voting.domain;

import com.kpi.voting.dao.entity.Test;
import com.kpi.voting.dao.memoryStore.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService {
    @Autowired
    private TestRepository testRepository;

    public Long createTest(String test_name, String test_description, Long test_creator_id){
        Test test = new Test();
        test.setTest_name(test_name);
        test.setTest_description(test_description);
        test.setTest_creator_id(test_creator_id);
        testRepository.save(test);
        return test.getTestId();
    }

    public List<Test> getAllTests(){
        return testRepository.findAll();
    }
}




/*
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







 */