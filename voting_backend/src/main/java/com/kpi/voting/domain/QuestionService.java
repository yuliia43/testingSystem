package com.kpi.voting.domain;

import com.kpi.voting.dao.QuestionRepository;
import com.kpi.voting.dao.entity.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public Question getLastQuestion() {
        Optional<Question> question = questionRepository.findTopByOrderByIdDesc();
        return question.orElse(null);
    }

    @Transactional
    public Question getQuestion(Long id) {
        Optional<Question> question = questionRepository.findById(id);
        return question.orElse(null);
    }

    public Long createQuestion(String title) {
        questionRepository.deleteAll();
        Question question = new Question();
        question.setTitle(title);
        question = questionRepository.save(question);
        questionRepository.flush();
        return question.getId();
    }

    public void printQuestionStatistics(Long id) {
        Question updatedQuestion = this.getQuestion(id);

        System.out.println("Updated statistics:");
        System.out.println(updatedQuestion);
        System.out.println("=========================");
    }
}
