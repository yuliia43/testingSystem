package testing.controller;

import com.kpi.testing.domain.AnswersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

@ShellComponent
public class AnswersController {
    @Autowired
    private AnswersService answersService;

    @ShellMethod("Save new answer")
    public void saveAnswer(Long TestId, Long UserId, int count_answers){
        answersService.saveAnswers(TestId, UserId, count_answers);
        System.out.println("Saved new answer");
    }
}



/*
@ShellComponent
public class QuestionsShellController {
    @Autowired
    private QuestionsService questionsService;

    @ShellMethod("Create new question")
    public void createQuestion(Long TestId, String Question, String Answer1, String Answer2, String Answer3, String Answer4, int Right_Answer){
        questionsService.createQuestion(TestId, Question, Answer1, Answer2, Answer3, Answer4, Right_Answer);
        System.out.println("Question" + Question + " created");
    }

    @ShellMethod("Print all questions to shell")
    public List<Questions> getAllQuestions() {
        return questionsService.getAllQuestions();
    }
}

 */
