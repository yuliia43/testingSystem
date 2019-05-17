import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {TableComponent} from '../table/table.component';
import {TestBoxComponent} from '../test-box/test-box.component';
import {ResultComponent} from '../result/result.component';
import {RegFormComponent} from '../reg-form/reg-form.component';
import {MenuComponent} from '../menu/menu.component';
import {EntranceComponent} from '../entrance/entrance.component';
import {UserPageComponent} from '../user-page/user-page.component';
import {AdminPageBanComponent} from '../admin-page-ban/admin-page-ban.component';
import {AdminPageComponent} from '../admin-page/admin-page.component';
import {CreateTestComponent} from '../create-test/create-test.component';
import {NoAuthorizeComponent} from '../no-authorize/no-authorize.component';
import {AppComponent} from '../app.component';
import {AnswerComponent} from '../answer/answer.component';
import {QuestionComponent} from '../question/question.component';
import {AdminComponent} from './admin.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule, MatRadioModule,
  MatTableModule
} from '@angular/material';
import {MainPageComponent} from '../main-page/main-page.component';
import {AdminQuestionsComponentComponent} from '../admin-questions-component/admin-questions-component.component';
const appRoutes: Routes = [
  {path: 'admin-page-users', component: AdminPageBanComponent},
  {path: 'admin-page-tests', component: AdminPageComponent},
  {path: 'admin-questions', component: AdminQuestionsComponentComponent}
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    TestBoxComponent,
    TableComponent,
    MenuComponent,
    RegFormComponent,
    QuestionComponent,
    CreateTestComponent,
    EntranceComponent,
    UserPageComponent,
    ResultComponent,
    AdminPageComponent,
    AdminPageBanComponent,
    NoAuthorizeComponent,
    AdminComponent,
    MainPageComponent,
    AdminQuestionsComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    RouterModule,
    FormsModule,
    MatTableModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule.forChild(appRoutes),
    MatListModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AdminModule {
}
