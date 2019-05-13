package testing.domain;

import com.kpi.testing.dao.entity.Questions;
import com.kpi.testing.dao.memoryStore.QuestionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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


/*\
@Service
public class TestService {
    @Autowired
    private TestRepository testRepository;

    public void createTest(String test_name, String test_description, Long test_creator_id){
        Test test = new Test();
        test.setTest_name(test_name);
        test.setTest_description(test_description);
        test.setTest_creator_id(test_creator_id);
    }

    public List<Test> getAllTests(){
        return testRepository.findAll();
    }
}

 */
