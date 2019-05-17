import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserResult} from '../result/result.component';
import {Observable} from 'rxjs';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {LocalStorageService} from '../services/local-storage.service';


export interface Test {
  testId: number;
 testName: string;
 testDescription: string;
 testCreatorId: number;
}

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
@Injectable()
export class CreateTestComponent implements OnInit {
  model: Test = {
    testId: 0,
    testName: '',
    testDescription: '',
    testCreatorId: LocalStorageService.getUserId()
  };

  constructor(private httpClient: HttpClient,
              private router: Router,
              private route: ActivatedRoute) { }

  createTest(name: string, description: string) {
    const formData = new FormData();
    formData.append('testName', name);
    formData.append('testDescription', description);
    formData.append('testCreatorId', String(LocalStorageService.getUserId()));
    this.httpClient.post('http://localhost:8082/tests/createTest', formData )
      .subscribe(res => {
          this.model.testId = Number(res);
          this.model.testName = name;
          this.model.testDescription = description;
        // LocalStorageService.setLastTestId(this.model.testId);
         // this.router.navigate(['/create-question']);
      },
      err => {
        alert('Error in creating of test occurred');
      }
    );
  }
  ngOnInit(): void {
  }

}
