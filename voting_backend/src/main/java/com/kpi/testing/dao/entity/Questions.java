package testing.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Questions {
    @Id
    @GeneratedValue
    private Long QuestionId;

    @Column
    private Long TestId;

    @Column
    private String Question;
    @Column
    private String Answer1;
    @Column
    private String Answer2;
    @Column
    private String Answer3;
    @Column
    private String Answer4;
    @Column
    private int Right_Answer;

    public Long getTestId() {
        return TestId;
    }

    public void setTestId(Long testId) {
        TestId = testId;
    }

    public String getQuestion() {
        return Question;
    }

    public void setQuestion(String question) {
        Question = question;
    }

    public String getAnswer1() {
        return Answer1;
    }

    public void setAnswer1(String answer1) {
        Answer1 = answer1;
    }

    public String getAnswer2() {
        return Answer2;
    }

    public void setAnswer2(String answer2) {
        Answer2 = answer2;
    }

    public String getAnswer3() {
        return Answer3;
    }

    public void setAnswer3(String answer3) {
        Answer3 = answer3;
    }

    public String getAnswer4() {
        return Answer4;
    }

    public void setAnswer4(String answer4) {
        Answer4 = answer4;
    }

    public int getRight_Answer() {
        return Right_Answer;
    }

    public void setRight_Answer(int right_Answer) {
        Right_Answer = right_Answer;
    }

    public Long getQuestionId() {
        return QuestionId;
    }

    public void setQuestionId(Long questionId) {
        QuestionId = questionId;
    }
}
