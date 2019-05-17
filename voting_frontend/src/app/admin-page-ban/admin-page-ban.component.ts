import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl} from "@angular/forms";
import {MatDatepicker} from "@angular/material";

export interface Users {
  login: string;
  banStatus: boolean;
  selectedDate: FormControl;
}

/*
const ELEMENT_DATA: Users[] = [
  {test_id: 1, login: 'login1', banStatus: true},
  {test_id: 2, login: 'login2', banStatus: false},
  {test_id: 3, login: 'login3', banStatus: false},
  {test_id: 4, login: 'login4', banStatus: false},
  {test_id: 5, login: 'login5', banStatus: true},
  {test_id: 6, login: 'login6', banStatus: false},
  {test_id: 7, login: 'login7', banStatus: false},
  {test_id: 8, login: 'login8', banStatus: false},
  {test_id: 9, login: 'login9', banStatus: false},
  {test_id: 10, login: 'login10', banStatus: false}
];
*/

@Component({
  selector: 'app-admin-page-ban',
  templateUrl: './admin-page-ban.component.html',
  styleUrls: ['./admin-page-ban.component.css']
})
export class AdminPageBanComponent implements OnInit {


  displayedColumns: string[] = ['login', 'delete'];
  dataSource: Users[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Users[]>('http://localhost:8082/user/banned')
      .subscribe(data => this.dataSource = data);
  }
  ban(login: string, date: Date): void {
    const bandata = new FormData();
    bandata.append('login', login);
    const str = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();
    bandata.append('stringDateTime', String( str + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()));
    this.httpClient.put<Users[]>('http://localhost:8082/bannedUser/ban', bandata)
      .subscribe(data => this.dataSource = data);
  }
  unban(login: string) {
    this.httpClient.put<Users[]>('http://localhost:8082/bannedUser/unban', login)
      .subscribe(data => this.dataSource = data);
  }

}
