package com.kpi.voting.domain;


import com.kpi.voting.dao.entity.BannedUser;
import com.kpi.voting.dao.entity.User;
import com.kpi.voting.dao.BannedUserRepository;
import com.kpi.voting.dao.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BannedUserService {

    @Autowired
    private BannedUserRepository bannedUserRepository;
    @Autowired
    private UserRepository userRepository;

    public void giveBan(String login, Duration duration){
        User user = new User();
        //= userRepository.getUserByLogin();
        if(user.isBanned()){
            //USER IS ALREADY BANNED!
        }
        else{
            Timestamp timestamp = Timestamp.valueOf(LocalDateTime.now().plus(duration));
            BannedUser bannedUser = new BannedUser();
            bannedUser.setUserId(user.getId());
            bannedUser.setUnbanDate(timestamp);
            user.setBanned(true);
        }
    }

    public void unban(User user){
        Optional<BannedUser> bannedUser = bannedUserRepository.findFirstByUserId(user.getId());
        bannedUser.ifPresent(bannedUser1 -> bannedUserRepository.delete(bannedUser1));
        user.setBanned(true);
    }


    public List<BannedUser> getAllBannedUsers(){
        return  bannedUserRepository.findAll();
    }

}
