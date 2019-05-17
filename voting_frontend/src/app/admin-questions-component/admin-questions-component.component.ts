import {UserService} from '../services/user.service';
import {QuestionService} from '../services/question.service';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import {interval, Unsubscribable} from 'rxjs';
import {Component, OnInit} from '@angular/core';
// import {Tests} from '../admin-page/admin-page.component';
export interface ForAdminQuestion {
  id: number;
  email: string;
  textQuestion: string;
}


@Component({
  selector: 'app-admin-questions-component',
  templateUrl: './admin-questions-component.component.html',
  styleUrls: ['./admin-questions-component.component.css']
})
export class AdminQuestionsComponentComponent implements OnInit {
  displayedColumns: string[] = ['email', 'textQuestion'];
  dataSource: ForAdminQuestion[];
  constructor(private httpClient: HttpClient,
              private router: Router) { }
  ngOnInit(): void {
    this.httpClient.get<ForAdminQuestion[]>('http://localhost:8082/for_admin_question')
  .subscribe(data => this.dataSource = data,
      err => alert('Error occurred while requesting for questions'));
  }

}
