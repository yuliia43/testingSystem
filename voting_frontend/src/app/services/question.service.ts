import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Question} from '../question/question.model';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {AnswerResponse} from './model/answer-response.model';
import {Answer} from '../answer/answer.model';

@Injectable({providedIn: 'root'})
export class QuestionService {

  question = new BehaviorSubject<Question>(new Question());

  constructor(private http: HttpClient,
              private userService: UserService) {
  }

  public getLastQuestion(): void {
    this.http.get<Question>('/question/last')
      .subscribe(question => this.question.next(question));
  }

  public answerQuestion(question: Question, answer: Answer<any>): Observable<any> {
    const body = AnswerResponse.create(question, answer, this.userService.getUserId());
    return this.http.post('vote', body);
  }

  addQuestion(question: string, answer1: string, answer2: string, answer3: string, answer4: string, rightAnswer: string, testCreatorId: number) {
    const formData = new FormData();
    formData.append('Question', question);
    formData.append('Answer1', answer1);
    formData.append('Answer2', answer2);
    formData.append('Answer3', answer3);
    formData.append('Answer4', answer4);
    formData.append('Right_Answer', rightAnswer);
    formData.append('testCreatorId', String(testCreatorId));
    this.http.post('http://localhost:8082/questions/createQuestion', formData)
      .subscribe();
  }
}
