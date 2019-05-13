import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface UserResult {
  userLogin: string;
  id: number;
  result: number;
}

const ELEMENT_DATA: UserResult[] = [
  {id: 1, userLogin: 'Test1', result: 100},
  {id: 2, userLogin: 'Test2', result: 100},
  {id: 3, userLogin: 'Test3', result: 100},
  {id: 4, userLogin: 'Test4', result: 100},
  {id: 5, userLogin: 'Test5', result: 100},
  {id: 6, userLogin: 'Test6', result: 100},
  {id: 7, userLogin: 'Test7', result: 100},
  {id: 8, userLogin: 'Test8', result: 100},
  {id: 9, userLogin: 'Test9', result: 100},
  {id: 10, userLogin: 'Test10', result: 100},
];
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userLogin', 'result'];
  dataSource: UserResult[] = ELEMENT_DATA;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    const testId = 1;
    this.httpClient.get<UserResult[]>(`/results/${testId}`)
      .subscribe(data => this.dataSource = data);
  }

}
