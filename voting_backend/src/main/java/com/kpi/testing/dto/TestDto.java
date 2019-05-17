package com.kpi.voting.dto;

import javax.validation.constraints.NotNull;


public class TestDto {
    @NotNull
    private String test_name;
    @NotNull
    private String test_description;
    @NotNull
    private long test_creator_id;


    public String getTest_name() {
        return test_name;
    }

    public void setTest_name(String test_name) {
        this.test_name = test_name;
    }

    public String getTest_description() {
        return test_description;
    }

    public void setTest_description(String test_description) {
        this.test_description = test_description;
    }

    public long getTest_creator_id() {
        return test_creator_id;
    }

    public void setTest_creator_id(long test_creator_id) {
        this.test_creator_id = test_creator_id;
    }



}
