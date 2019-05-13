package testing.dao.memoryStore;

import com.kpi.testing.dao.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {
//    Optional<User> findById(Long UserId);
    User findFirstByLogin(String login);
}
