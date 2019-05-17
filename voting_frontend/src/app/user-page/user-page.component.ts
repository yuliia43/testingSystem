import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from '../services/local-storage.service';
import {ActivatedRoute, Router} from "@angular/router";

export interface Test {
  test_name: string;
  test_id: number;
  test_description: string;
}
// пример данных для таблицы
const ELEMENT_DATA: Test[] = [
  {test_id: 1, test_name: 'Test1', test_description: 'lalalalalallaalalaalalalallaalalallalalalalalalalal'},
  {test_id: 2, test_name: 'Test2', test_description: 'lalalalalallaalalaalalalallaalalallalalalalalalalal'},
  {test_id: 3, test_name: 'Test3', test_description: 'lalalalalallaalalaalalalallaalalallalalalalalalalal'},
  {test_id: 4, test_name: 'Test4', test_description: 'lalalalalallaalalaalalalallaalalallalalalalalalalal'},
  {test_id: 5, test_name: 'Test5', test_description: 'lalalalalallaalalaalalalallaalalallalalalalalalalal'},
  {test_id: 6, test_name: 'Test6', test_description: 'lalalalalallaalalaalalalallaalalallalalalalalalalal'},
  {test_id: 7, test_name: 'Test7', test_description: 'lalalalalallaalalaalalalallaalalallalalalalalalalal'},
  {test_id: 8, test_name: 'Test8', test_description: 'lalalalalallaalalaalalalallaalalallalalalalalalalal'},
  {test_id: 9, test_name: 'Test9', test_description: 'lalalalalallaalalaalalalallaalalallalalalalalalalal'},
  {test_id: 10, test_name: 'Test10', test_description: 'lalalalalallaalalaalalalallaalalallalalalalalalalal'}
];

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
@Injectable()
export class UserPageComponent implements OnInit {
  login: string;
  displayedColumns: string[] = ['test_name', 'test_description', 'statistics'];
  dataSource = ELEMENT_DATA;
  curId: number;
  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.loadData();
  }
  ngOnInit() {
  }
  loadData() {
    const id = LocalStorageService.getUserId();
    this.httpClient.get(`http://localhost:8082/user/login/${id}`, {responseType: 'text'}).
    subscribe(login => this.login = login,
      error1 => {alert('Error' + error1); });
    this.httpClient.get<Test[]>(`http://localhost:8082/tests/user/${id}`).
    subscribe(tests => this.dataSource = tests,
      error1 => {alert('Error' + error1); });
  }
  // попыталась так, как ты просила, но через ф-ции не вышло(
  statistics(id: number) {
    this.curId = id;
    this.router.navigateByUrl('user-page/stats');
  }

}
