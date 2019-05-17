import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Unsubscribable} from 'rxjs';
import {UserService} from '../services/user.service';
import {QuestionService} from '../services/question.service';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import {LocalStorageService} from '../services/local-storage.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  title = 'Voting Application';
  private intervalSubscription: Unsubscribable;

  constructor(private userService: UserService,
              private questionService: QuestionService,
              private httpClient: HttpClient,
              private toaster: ToasterService,
              // ОН ДОБАВИЛ РОУТЕР!!!!!!!!!!!!!!!
              private router: Router,
              private app: AppComponent) {
  }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
    this.userService.initUser();
    this.intervalSubscription = interval(1000).subscribe(() => this.questionService.getLastQuestion());
  }

  sendMessage(message: string): void {
    this.httpClient.put('chat', message)
      .subscribe(() => this.toaster.pop('success', 'Message sended.'));
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  // МЕТОД НАВИГАЦИИ
  onNavigate(url: string): void {
    this.router.navigateByUrl(url);
  }

  unAuthorise() {
    LocalStorageService.setUserId(0);
  }

  createTest() {
    if (!!LocalStorageService.getUserId() && LocalStorageService.getUserId() !== 0) {
      this.router.navigateByUrl('create-test');
    } else {
      this.router.navigateByUrl('authorisation-error');
    }
  }

  passTest() {
    if (!!LocalStorageService.getUserId() && LocalStorageService.getUserId() !== 0) {
      this.router.navigateByUrl('table');
    } else {
      this.router.navigateByUrl('authorisation-error');
    }
  }

  userPage() { // сюда нужны его таблицы с ссылками на статистику
    if (!!LocalStorageService.getUserId() && LocalStorageService.getUserId() !== 0) {
      this.router.navigateByUrl('user-page');
    } else {
      this.router.navigateByUrl('authorisation-error');
    }
  }

  entrance() {
    this.router.navigateByUrl('entrance');
  }

  registration() {
    this.router.navigateByUrl('reg-form');
  }
  setTheme(theme: string): void {
    this.app.setTheme(theme);
  }
}
