package testing.controller;

import com.kpi.testing.dao.entity.Test;
import com.kpi.testing.domain.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

import java.util.List;

@ShellComponent
public class TestShellController {
    @Autowired
    private TestService testService;

    @ShellMethod("Create test from shell")
    public void createTest(String test_name, String test_description, Long test_creator_id){
        testService.createTest(test_name,test_description,test_creator_id);
        System.out.println("Test " + test_name + " created");
    }

    @ShellMethod("Print all tests names to shell")
    public List<Test> getAllUser() {
        return testService.getAllTests();
    }
}

