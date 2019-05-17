package com.kpi.voting.controller;

import com.kpi.voting.dao.entity.Test;
import com.kpi.voting.domain.TestService;
import com.kpi.voting.dto.TestDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@ShellComponent
@RestController
@RequestMapping("tests")
public class TestShellController {
    @Autowired
    private TestService testService;

    @ShellMethod("Create test from shell")
    @PostMapping(produces = "application/json")
    void createTest(@RequestBody TestDto test){
        testService.createTest(test.getTest_name(),test.getTest_description(),test.getTest_creator_id());
    }
    @ShellMethod("Print all tests names to shell")
    public List<Test> getAllTests() {
        return testService.getAllTests();
    }



  // @RequestMapping(value = "/{testId}", method = RequestMethod.GET)
  // public @ResponseBody
  // List<?> getTestData(@PathVariable Long testId) {
  //     return TestService.getResultsForTest(testId);
  // }
}

/*ResponseEntity<?> createTest(@RequestBody TestDto test){
        try{
            testService.createTest(test.getTest_name(),test.getTest_description(),test.getTest_creator_id());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }*/
