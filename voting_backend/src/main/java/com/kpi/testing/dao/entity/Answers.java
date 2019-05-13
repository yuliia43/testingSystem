package testing.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

@Entity
public class Answers {
    @javax.persistence.Id
    @GeneratedValue
    private Long Id;

    @Column
    private Long TestId;
    @Column
    private Long UserId;
    @Column
    int count_answers;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Long getTestId() {
        return TestId;
    }

    public void setTestId(Long testId) {
        TestId = testId;
    }

    public Long getUserId() {
        return UserId;
    }

    public void setUserId(Long userId) {
        UserId = userId;
    }

    public int getCount_answers() {
        return count_answers;
    }

    public void setCount_answers(int count_answers) {
        this.count_answers = count_answers;
    }
}
