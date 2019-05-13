package testing.domain;


import com.kpi.testing.dao.entity.BannedUser;
import com.kpi.testing.dao.entity.User;
import com.kpi.testing.dao.memoryStore.BannedUserRepository;
import com.kpi.testing.dao.memoryStore.UserRepository;
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
        User user = userRepository.findFirstByLogin(login);
        if(user.getBan_status()){
            //USER IS ALREADY BANNED!
        }
        else{
            Timestamp timestamp = Timestamp.valueOf(LocalDateTime.now().plus(duration));
            BannedUser bannedUser = new BannedUser();
            bannedUser.setUserId(user.getId());
            bannedUser.setUnbanDate(timestamp);
            user.setBan_status(true);
        }
    }

    public void unban(User user){
        Optional<BannedUser> bannedUser = bannedUserRepository.findFirstByUserId(user.getId());
        bannedUser.ifPresent(bannedUser1 -> bannedUserRepository.delete(bannedUser1));
        user.setBan_status(true);
    }


    public List<BannedUser> getAllBannedUsers(){
        return  bannedUserRepository.findAll();
    }

}
