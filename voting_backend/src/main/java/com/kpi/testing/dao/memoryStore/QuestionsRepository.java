package testing.dao.memoryStore;

import com.kpi.testing.dao.entity.Questions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionsRepository  extends JpaRepository<Questions, Long> {
//    Optional<Questions> findById(Long id);
}

