import { Component} from '@angular/core';
import {Router} from '@angular/router';
/*const todos = [
  {
    title: 'Variant 1',
    completed: false
  },
  {
    title: 'Variant 2',
    completed: false
  },
  {
    title: 'Variant 3',
    completed: false
  },
  {
    title: 'Variant 4',
    completed: false
  }
];*/
@Component({
  selector: 'app-test-box',
  templateUrl: './test-box.component.html',
  styleUrls: ['./test-box.component.css']
})
export class TestBoxComponent{
  labelPosition = 'a';
  /*title = 'Checkbox';
  todos = todos;
  toggle(todo: any) {
    todo.completed = !todo.completed;
  }*/
  constructor(private router: Router) { }

}
