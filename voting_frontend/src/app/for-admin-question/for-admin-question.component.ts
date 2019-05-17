import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-for-admin-question',
  templateUrl: './for-admin-question.component.html',
  styleUrls: ['./for-admin-question.component.css']
})
export class ForAdminQuestionComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  registerQuestion(email: string, textQuestion: string) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('textQuestion', textQuestion);
    this.http.post('http://localhost:8082/for_admin_question/createForAdminQuestion', formData)
      .subscribe();
    alert('Your question was sent successfuly.');
  }
}
