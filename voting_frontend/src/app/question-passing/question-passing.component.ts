import { Component, OnInit } from '@angular/core';
import { TestPassingComponent} from '../test-passing/test-passing.component';
import {Router} from '@angular/router';
import {Test} from '../create-test/create-test.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocalStorageService} from "../services/local-storage.service";
import {assertLessThan} from "@angular/core/src/render3/assert";

export interface Question {
  testId: number;
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  right_Answer: number;
}

@Component({
  selector: 'app-question-passing',
  templateUrl: './question-passing.component.html',
  styleUrls: ['./question-passing.component.css']
})
export class QuestionPassingComponent implements OnInit {
  constructor(private httpClient: HttpClient,
              private router: Router,
              private testPassingComponent: TestPassingComponent) { }
  model: Question = {
    testId: 0,
    question: '',
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    right_Answer: 0
  };
  questions: Question[] = [];
  numOfQuestions: number;
  currentQuestion: number;
  currentAnswer: number;
  currentScore: number;
  finished: number;
  ngOnInit() {
    this.numOfQuestions = 0; this.currentQuestion = 0; this.currentAnswer = 0; this.currentScore = 0; this.finished = 0;
    // alert(this.testPassingComponent.model.);
    this.model.testId = this.testPassingComponent.model.testId;
    this.httpClient.get<Question[]>(`http://localhost:8082/questions/${this.model.testId}`).subscribe(
      data => {
        this.questions = data;
        this.numOfQuestions = this.questions.length;

        },
      err => alert('Error getting questions')
    );
  }
  CheckRB(value) {
    switch (value) {
      case('a'):
        this.currentAnswer = 1;
        break;
      case('b'):
        this.currentAnswer = 2;
        break;
      case('c'):
        this.currentAnswer = 3;
        break;
      case('d'):
        this.currentAnswer = 4;
        break;
    }
  }

  Next() {
    if (this.currentAnswer === 0) {
      return;
    }
    if (this.currentAnswer === this.questions[this.currentQuestion].right_Answer) {
      this.currentScore += 1;
    }
    this.currentAnswer = 0;
    this.currentQuestion += 1;
    if (this.currentQuestion === this.numOfQuestions) {
      this.currentScore = (this.currentScore / this.numOfQuestions) * 100;
      this.finished = 1;
      // this.router.navigateByUrl('');
    }
  }
  Exit() {
    const formData = new FormData();
    formData.append('userId', String(LocalStorageService.getUserId()));
    formData.append('testId', String(this.model.testId));
    formData.append('result', String(this.currentScore));
    this.httpClient.post(`http://localhost:8082/results/addResult`, formData)
      .subscribe();
    this.router.navigateByUrl('user-page');
  }

}
