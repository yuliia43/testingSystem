import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register(login: string, password: string, confirm: string) {
    if (login.length === 0 || password.length === 0 || confirm.length === 0) {
      alert('Fill all textfields.');
    } else {
      // if this.userService.initUser();
      if (login.length < 4) {
        alert('Login must have more than 3 charachters.Try again.');
      } else {
        if (password !== confirm) {
          alert('Wrong password confirmation. Try again.');
        } else {
          this.userService.registerUser(login, password);
          alert('User was created successfuly.');
        }
      }
    }
  }
}
