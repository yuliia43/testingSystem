package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.BannedUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BannedUserRepository extends JpaRepository<BannedUser, Long> {
    Optional<BannedUser> findFirstByUserId(Long id);
}
