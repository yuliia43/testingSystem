import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {interval, Unsubscribable} from 'rxjs';
import {QuestionService} from './services/question.service';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageService} from "./services/local-storage.service";

export interface Style {
  'background-image': string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent implements OnInit, OnDestroy {

  title = 'Voting Application';
  private intervalSubscription: Unsubscribable;
  private myStyles: Style = {
    'background-image': 'url(\'http://i42.beon.ru/63/71/2057163/78/90582478/tumblr_lv490jvnvs1r6me19o1_400_large.gif\')'
  };

  constructor(private userService: UserService,
              private questionService: QuestionService,
              private httpClient: HttpClient,
              private toaster: ToasterService,
              // ОН ДОБАВИЛ РОУТЕР!!!!!!!!!!!!!!!
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
    this.userService.initUser();
    // this.intervalSubscription = interval(1000).subscribe(() => this.questionService.getLastQuestion());
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
    if (this.router.url !== '/entrance' && this.router.url !== '/reg-form') {
      this.router.navigateByUrl('authorisation-error');
    }
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
  public setTheme(theme: string) {
    if (theme === 'cloud') {
      this.myStyles = {
        'background-image': 'url(\'http://i42.beon.ru/63/71/2057163/78/90582478/tumblr_lv490jvnvs1r6me19o1_400_large.gif\')'
      };
    } else if (theme === 'animals') {
      this.myStyles = {
        'background-image': 'url(\'https://image.freepik.com/free-vector/_27722-178.jpg\')'
      };
    } else if (theme === 'foxes') {
      this.myStyles = {
        'background-image': 'url(\'https://i.pinimg.com/originals/a0/a4/c9/a0a4c944536cb74ed3243af771edf951.png\')'
      };
    } else if (theme === 'gradient1') {
      this.myStyles = {
        'background-image':
          'url(\'https://hookagency.com/wp-content/uploads/2015/11/miracle-grow-light-green-gradient.jpg\')'
      };
    } else if (theme === 'elephants') {
      this.myStyles = {
        'background-image':
          'url(\'https://image.freepik.com/free-vector/_27722-178.jpg\')'
      };
    } else if (theme === 'galaxy') {
      this.myStyles = {
        'background-image': 'url(\'https://images.clipartlogo.com/files/istock/previews/1031/103150483-starry-sky-seamless-pattern-child.jpg\')'
      };
    } else if (theme === 'feather') {
      this.myStyles = {
        'background-image': 'url(\'https://previews.123rf.com/images/zzorik/zzorik1701/zzorik170100092/70377661-plumas-de-p%C3%A1jaro-patr%C3%B3n-de-fondo-de-pantalla-repetido-acuarela.jpg\')'
      };
    } else if (theme === 'owls') {
      this.myStyles = {
        'background-image': 'url(\'http://i75.mindmix.ru/85/54/355485/82/6596982/_39.png\')'
      };
    }
  }
  getMyStyles() {
    return this.myStyles;
}
}
