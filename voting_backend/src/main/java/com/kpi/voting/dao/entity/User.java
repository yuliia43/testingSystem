package com.kpi.voting.dao.entity;

import javax.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String name;
    private boolean isBanned;

    public void setBanned(boolean banned) {
        isBanned = banned;
    }

    public boolean isBanned() {
        return isBanned;
    }

    public User(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
