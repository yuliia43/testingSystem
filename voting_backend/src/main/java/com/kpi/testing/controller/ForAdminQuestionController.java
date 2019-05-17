package com.kpi.voting.controller;

import com.kpi.voting.dao.entity.ForAdminQuestion;
import com.kpi.voting.dao.entity.Questions;
import com.kpi.voting.domain.ForAdminQuestionService;
import com.kpi.voting.domain.QuestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@ShellComponent
@RestController
@RequestMapping("/for_admin_question")
public class ForAdminQuestionController {

    @Autowired
    private ForAdminQuestionService forAdminQuestionService;




    @RequestMapping(value="/{Id}", method =
            RequestMethod.GET)
    public @ResponseBody
    List<ForAdminQuestion> getTableData(@PathVariable Long Id){
        return forAdminQuestionService.getResultsForQuestion(Id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/createForAdminQuestion")
    @ShellMethod("Create_for_admin_question_from_shell")
    public void createForAdminQuestion(String email,String textQuestion){
        forAdminQuestionService.createForAdminQuestion(email,textQuestion);
        System.out.println("User created ");
    }

}