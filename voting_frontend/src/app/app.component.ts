import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {interval, Unsubscribable} from 'rxjs';
import {QuestionService} from './services/question.service';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Voting Application';
  private intervalSubscription: Unsubscribable;

  constructor(private userService: UserService,
              private questionService: QuestionService,
              private httpClient: HttpClient,
              private toaster: ToasterService,
              // ОН ДОБАВИЛ РОУТЕР!!!!!!!!!!!!!!!
              private router: Router) {
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

}
