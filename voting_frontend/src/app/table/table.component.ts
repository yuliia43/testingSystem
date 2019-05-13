import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {QuestionService} from '../services/question.service';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import {interval, Unsubscribable} from 'rxjs';

export interface PeriodicElement {
  name: string;
  id: number;
  link: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Test1', description: 'description1', link: 'link1'},
  {id: 2, name: 'Test2', description: 'description2', link: 'link2'},
  {id: 3, name: 'Test3', description: 'description3', link: 'link3'},
  {id: 4, name: 'Test4', description: 'description4', link: 'link4'},
  {id: 5, name: 'Test5', description: 'description5', link: 'link5'},
  {id: 6, name: 'Test6', description: 'description6', link: 'link6'},
  {id: 7, name: 'Test7', description: 'description7', link: 'link7'},
  {id: 8, name: 'Test8', description: 'description8', link: 'link8'},
  {id: 9, name: 'Test9', description: 'description9', link: 'link9'},
  {id: 10, name: 'Test10', description: 'description10', link: 'link10'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'name', 'description', 'link'];
  dataSource = ELEMENT_DATA;
 constructor(private router: Router) { }
}
