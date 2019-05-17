import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CurrentTestIdService} from '../services/current-test-id.service';

export interface UserResult {
  userLogin: string;
  id: number;
  result: number;
}


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  displayedColumns: string[] = ['test_id', 'userLogin', 'result'];
  dataSource: UserResult[];
  /*@Input() testId: number;*/
  testId = 1;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    /*this.currentTestIdService.currentId.subscribe(testId1 => this.testId = testId1);*/
    this.httpClient.get<UserResult[]>(`/results/${this.testId}`)
      .subscribe(data => this.dataSource = data);
  }

}
