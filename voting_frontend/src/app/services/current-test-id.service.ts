import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable()
export class CurrentTestIdService {

  private testIdSource = new BehaviorSubject<number>(1);
  currentId = this.testIdSource.asObservable();
  constructor() { }
  setTestId(testId: number) {
    this.testIdSource.next(testId);
  }
}
