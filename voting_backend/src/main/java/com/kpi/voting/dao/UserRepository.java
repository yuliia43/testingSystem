package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

        // Use find one
        Optional<User> findById(Long id);


    /*@Query("SELECT u.* FROM User u")
    Optional<User> customQuery();*/
}
