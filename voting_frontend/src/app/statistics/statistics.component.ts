import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserResult} from "../result/result.component";
import {UserPageComponent} from "../user-page/user-page.component";
export interface UserResult {
  userLogin: string;
  id: number;
  result: number;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  // добавила названия колонок
  displayedColumns: string[] = ['userId', 'userLogin', 'result'];
  dataSource: UserResult[];
  constructor(private httpClient: HttpClient, private user: UserPageComponent) { }

  ngOnInit() {
    const testId = this.user.curId;
    this.httpClient.get<UserResult[]>(`http://localhost:8082/results/${testId}`)
      .subscribe(data => this.dataSource = data);
  }

}
