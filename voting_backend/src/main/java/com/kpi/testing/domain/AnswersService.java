package testing.domain;

import com.kpi.testing.dao.entity.Answers;
import com.kpi.testing.dao.memoryStore.AnswersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnswersService {
    @Autowired
    private AnswersRepository answersRepository;

    public void saveAnswers(Long TestId, Long UserId, int count_answers){
        Answers answer = new Answers();
        answer.setTestId(TestId);
        answer.setUserId(UserId);
        answer.setCount_answers(count_answers);
        answersRepository.save(answer);
    }


}



/*
@Service
public class QuestionsService {
    @Autowired
    private QuestionsRepository questionsRepository;

    public void createQuestion(Long TestId, String Question, String Answer1, String Answer2, String Answer3, String Answer4, int Right_Answer) {
        Questions question = new Questions();
        question.setQuestion(Question);
        question.setTestId(TestId);
        question.setAnswer1(Answer1);
        question.setAnswer2(Answer2);
        question.setAnswer3(Answer3);
        question.setAnswer4(Answer4);
        question.setRight_Answer(Right_Answer);
        questionsRepository.save(question);
    }

    public List<Questions> getAllQuestions(){
        return  questionsRepository.findAll();
    }

}
 */
