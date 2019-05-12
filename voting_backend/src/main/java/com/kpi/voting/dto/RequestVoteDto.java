package com.kpi.voting.dto;

import javax.validation.constraints.NotNull;

public class RequestVoteDto {

    @NotNull
    private int id;

    @NotNull
    private boolean answer;

    @NotNull
    private Long userId;

    @NotNull
    private Long questionId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isAnswer() {
        return answer;
    }

    public void setAnswer(boolean answer) {
        this.answer = answer;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }
}
