import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {QuestionService} from '../services/question.service';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import {interval, Unsubscribable} from 'rxjs';
// import {Tests} from '../admin-page/admin-page.component';
export interface Tests {
  test_id: number;
  test_name: string;
  test_description: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['testId', 'testName', 'testDescription', 'PassTest'];
  dataSource: Tests[];
  constructor(private httpClient: HttpClient,
              private router: Router) { }
  ngOnInit(): void {
    this.httpClient.get<Tests[]>(`http://localhost:8082/tests`)
      .subscribe(data => this.dataSource = data,
        err => alert('Error occurred while requesting for tests'));
  }

  PassTest(testId: number) {
    this.router.navigateByUrl(`/test-passing/${testId}`);
  }

}
