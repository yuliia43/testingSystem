package testing.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Test {
    @Id
    @GeneratedValue
    private Long TestId;

    @Column
    private String test_name;
    @Column
    private String test_description;
    @Column
    private Long test_creator_id;

    public Test() {}

    public Long getTestId() {
        return TestId;
    }
    public void setTestId(Long TestId) {
        this.TestId = TestId;
    }

    public String getTest_description() {
        return test_description;
    }

    public void setTest_description(String test_description) {
        this.test_description = test_description;
    }

    public Long getTest_creator_id() {
        return test_creator_id;
    }

    public void setTest_creator_id(Long test_creator_id) {
        this.test_creator_id = test_creator_id;
    }

    public String getTest_name() {
        return test_name;
    }

    public void setTest_name(String test_name) {
        this.test_name = test_name;
    }
}
