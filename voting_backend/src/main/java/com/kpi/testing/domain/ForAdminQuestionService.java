package com.kpi.voting.domain;

import com.kpi.voting.dao.entity.ForAdminQuestion;
import com.kpi.voting.dao.memoryStore.ForAdminQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ForAdminQuestionService {
    @Autowired
    private ForAdminQuestionRepository forAdminQuestionRepository;

    public void createForAdminQuestion(String email, String textQuestion ) {
        ForAdminQuestion question = new ForAdminQuestion();
        question.setEmail(email);
        question.setTextQuestion(textQuestion);
        forAdminQuestionRepository.save(question);
}

    public List<ForAdminQuestion> getAllQuestions(){
        return  forAdminQuestionRepository.findAll();
    }

   public List<ForAdminQuestion> getResultsForQuestion(Long Id)
    {
        List<ForAdminQuestion> questions =
                forAdminQuestionRepository.findAllById(Id);

        return questions;
    }
}
