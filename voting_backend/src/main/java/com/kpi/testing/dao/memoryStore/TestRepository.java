package testing.dao.memoryStore;

import com.kpi.testing.dao.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<Test, Long> {
//    Optional<Test> findById(Long id);
}

