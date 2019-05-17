package com.kpi.voting.dao.memoryStore;

import com.kpi.voting.dao.entity.ForAdminQuestion;
import com.kpi.voting.dao.entity.Questions;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ForAdminQuestionRepository  extends JpaRepository<ForAdminQuestion, Long>{
    Optional<ForAdminQuestion> findById(Long Id);
    List<ForAdminQuestion> findAllById(Long Id);

}

