package testing.dao.memoryStore;

import com.kpi.testing.dao.entity.BannedUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BannedUserRepository extends JpaRepository<BannedUser, Long> {
    Optional<BannedUser> findFirstByUserId(Long id);
}
