package testing.dao.memoryStore;

import com.kpi.testing.dao.entity.Answers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswersRepository extends JpaRepository<Answers, Long> {

    // Use findOne()
//    Optional<Answers> findById(Long Id);
}
