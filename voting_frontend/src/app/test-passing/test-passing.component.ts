import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

export interface TestInfo {
  testName: string;
  testDescription: string;
  testCreatorId: number;
  testId: number;
}

@Component({
  selector: 'app-test-passing',
  templateUrl: './test-passing.component.html',
  styleUrls: ['./test-passing.component.css']
})

@Injectable()
export class TestPassingComponent implements OnInit {
  model: TestInfo = {
    testName: '',
    testDescription: '',
    testCreatorId: 0,
    testId: 0
  };
  login: string;
  constructor(private httpClient: HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.model.testId = params.id;
    });
    this.httpClient.get<TestInfo>(`http://localhost:8082/tests/${this.model.testId}`)
      .subscribe(data => {
        this.model.testName = data.testName;
        this.model.testDescription = data.testDescription;
        this.model.testCreatorId = data.testCreatorId;
      },
        err => alert('Test not found')
    );
    setTimeout(() => {
      this.httpClient.get(`http://localhost:8082/user/login/${this.model.testCreatorId}`, {responseType: 'text'}).
      subscribe(login => this.login = login,
        error1 => {alert('Error' + error1); });
    }, 500);
  }

}
