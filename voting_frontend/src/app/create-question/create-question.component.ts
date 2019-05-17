import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CreateTestComponent} from '../create-test/create-test.component';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  constructor(private httpClient: HttpClient,
              private router: Router,
              private createTestComponent: CreateTestComponent) { }
  questionsNumber: number;
  ngOnInit() {
    this.questionsNumber = 0;
  }
  addQuestion(question: string, answer1: string, answer2: string , answer3: string, answer4: string, rightAnswer: string) {
    if (question === '' || answer1 === '' || answer2 === '' || answer3 === '' || answer4 === '' || rightAnswer === '') {
      alert('Fill all the fields, please');
      return;
    }
    switch (rightAnswer) {
      case('a') : rightAnswer = '1'; break;
      case('b') : rightAnswer = '2'; break;
      case('c') : rightAnswer = '3'; break;
      case('d') : rightAnswer = '4'; break;
      case('1') : rightAnswer = '1'; break;
      case('2') : rightAnswer = '2'; break;
      case('3') : rightAnswer = '3'; break;
      case('4') : rightAnswer = '4'; break;
      default: alert('Right answer is not correct, type in number or letter'); return;
    }
    const formData = new FormData();
    formData.append('Question', question);
    formData.append('Answer1', answer1);
    formData.append('Answer2', answer2);
    formData.append('Answer3', answer3);
    formData.append('Answer4', answer4);
    formData.append('Right_Answer', rightAnswer);
    formData.append('testId', String(this.createTestComponent.model.testId));
    this.httpClient.post('http://localhost:8082/questions/createQuestion', formData).subscribe(
      () => this.questionsNumber += 1 ,
      err => alert('Question was not created')
    );
    // location.reload();
  }

  finish() {
    if ( this.questionsNumber < 1) { alert('You should add at least one question.'); return; }
    this.router.navigateByUrl('user-page');
  }

}
