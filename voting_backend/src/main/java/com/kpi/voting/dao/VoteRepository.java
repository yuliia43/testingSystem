package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VoteRepository extends JpaRepository<Vote, Long> {

    Optional<Vote> findByUserIdAndQuestionId(Long userId, Long questionId);
}
