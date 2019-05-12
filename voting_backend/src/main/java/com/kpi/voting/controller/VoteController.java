package com.kpi.voting.controller;

import com.kpi.voting.domain.VoteService;
import com.kpi.voting.dto.RequestVoteDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 01.04.2019.
 */
@RestController
@RequestMapping("vote")
public class VoteController {

    @Autowired
    private VoteService voteService;

    @PostMapping(produces = "application/json")
    public ResponseEntity<?> answer(@Valid @RequestBody RequestVoteDto vote) {
        try {
            voteService.vote(vote);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
