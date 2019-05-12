package com.kpi.voting.dao.entity;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "question")
@Cacheable(false)
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 255)
    private String title;

    @Temporal(TemporalType.DATE)
    private Date createdAt;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private Collection<Vote> votes;

    @Fetch(FetchMode.SUBSELECT)
    @Formula("(select count(*) from vote where vote.answer = true)")
    private int voteYesCount;

    @Fetch(FetchMode.SUBSELECT)
    @Formula("(select count(*) from vote where vote.answer = false)")
    private int voteNoCount;


    public int getVoteYesCount() {
        return voteYesCount;
    }

    public void setVoteYesCount(int voteYesCount) {
        this.voteYesCount = voteYesCount;
    }


    public int getVoteNoCount() {
        return voteNoCount;
    }

    public void setVoteNoCount(int voteNoCount) {
        this.voteNoCount = voteNoCount;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @Override
    public String toString() {
        String toString = "Question: " + this.getTitle() + "\n" +
                "Yes: " + this.getVoteYesCount() + "\tNo: " + this.getVoteNoCount();
        return toString;
    }
}
