package com.kpi.voting.dao.entity;
import javax.persistence.*;

@Entity
public class ForAdminQuestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String email;
    @Column
    private String textQuestion;


    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getEmail() {
        return Email;
    }

    public String getTextQuestion() {
        return TextQuestion;
    }

    public void setTextQuestion(String textQuestion) {
        TextQuestion = textQuestion;
    }

    public void setEmail(String email) {
        Email = email;
    }
}
