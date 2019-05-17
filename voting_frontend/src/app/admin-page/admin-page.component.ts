import { Component, OnInit } from '@angular/core';
import {UserResult} from '../result/result.component';
import {HttpClient} from '@angular/common/http';
import {CurrentTestIdService} from '../services/current-test-id.service';

export interface Tests {
  test_name: number;
  test_description: string;
  test_creator: string;
  test_id: number;
}

const ELEMENT_DATA1: Tests[] = [
  {test_name: 1, test_description: 'name1', test_creator: 'jk', test_id: 1},
  {test_name: 2, test_description: 'name2', test_creator: 'jk', test_id: 1},
  {test_name: 3, test_description: 'name3', test_creator: 'jk', test_id: 1},
  {test_name: 4, test_description: 'name4', test_creator: 'jk', test_id: 1},
  {test_name: 5, test_description: 'name5', test_creator: 'jk', test_id: 1},
  {test_name: 6, test_description: 'name6', test_creator: 'jk', test_id: 1},
  {test_name: 7, test_description: 'name7', test_creator: 'jk', test_id: 1},
  {test_name: 8, test_description: 'name8', test_creator: 'jk', test_id: 1},
  {test_name: 9, test_description: 'name9', test_creator: 'jk', test_id: 1},
  {test_name: 10, test_description: 'name10', test_creator: 'jk', test_id: 1},
];
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  displayedColumns1: string[] = ['test_name', 'test_creator', 'test_description', 'delete'];
  dataSource1: Tests[] = ELEMENT_DATA1;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Tests[]>('http://localhost:8082/tests')
      .subscribe(data => this.dataSource1 = data);
  }
    deleteTest(testId: number) {
      this.httpClient.delete<Tests[]>(`http://localhost:8082/tests/delete/${testId}`)
        .subscribe(data => this.dataSource1 = data);
    }
}
