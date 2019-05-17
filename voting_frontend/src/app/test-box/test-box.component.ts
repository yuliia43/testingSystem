import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface TestQuestion {
  Question: string;
  Answer1: string;
  Answer2: string;
  Answer3: string;
  Answer4: string;
  Right_Answer: number;
}



@Component({
  selector: 'app-test-box',
  templateUrl: './test-box.component.html',
  styleUrls: ['./test-box.component.css']
})
export class TestBoxComponent implements OnInit {
  labelPosition = 'a';
  dataSource: TestQuestion[];
  /*title = 'Checkbox';
  todos = todos;
  toggle(todo: any) {
    todo.completed = !todo.completed;
  }*/
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.dataSource = [
      {Question: 'quest', Answer1: 'ans', Answer2: 'ans', Answer3: 'ans', Answer4: 'ans', Right_Answer: 1},
      {Question: 'quest', Answer1: 'ans', Answer2: 'ans', Answer3: 'ans', Answer4: 'ans', Right_Answer: 2},
      {Question: 'quest', Answer1: 'ans', Answer2: 'ans', Answer3: 'ans', Answer4: 'ans', Right_Answer: 3},
    ];
  }

}
