import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../services/local-storage.service';
import {HttpClient} from '@angular/common/http';
import {isNumber} from 'util';
import {Router} from "@angular/router";

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {
  message: string;
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.message = 'Smth wrong';
  }
  enter(login: string, password: string) {
    if (login.length === 0 || password.length === 0) {
      alert('Fill the blanks, please.');
    } else {
      this.httpClient.get<string>(`http://localhost:8082/user/authorisate/${login}_${password}`).
      subscribe(message => this.message = message);
      setTimeout(() => {if (/^\d+$/.test(this.message)) {
        LocalStorageService.setUserId(parseInt(this.message, 10));
        this.router.navigateByUrl('user-page');
      } else {
        alert(this.message);
      }}, 500);
    }
  }
}
