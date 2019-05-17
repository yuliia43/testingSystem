import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AnswerComponent } from './answer/answer.component';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestBoxComponent } from './test-box/test-box.component';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './table/table.component';
// IMPORT
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule, MatRadioModule
} from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { QuestionComponent } from './question/question.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { EntranceComponent } from './entrance/entrance.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ResultComponent } from './result/result.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminPageBanComponent } from './admin-page-ban/admin-page-ban.component';
import { NoAuthorizeComponent } from './no-authorize/no-authorize.component';
import { AdminComponent } from './admin/admin.component';
import { StatisticsComponent } from './statistics/statistics.component';
import {MainPageComponent} from "./main-page/main-page.component";
import {TestPassingComponent} from "./test-passing/test-passing.component";
import {CreateQuestionComponent} from "./create-question/create-question.component";
import {QuestionPassingComponent} from "./question-passing/question-passing.component";
import { ForAdminQuestionComponent } from './for-admin-question/for-admin-question.component';
import { AdminQuestionsComponentComponent } from './admin-questions-component/admin-questions-component.component';


const appRoutes: Routes = [
  { path: 'table', component: TableComponent},
  {path: 'test-box', component: TestBoxComponent},
  {path: 'result', component: ResultComponent},
  { path: 'reg-form', component: RegFormComponent },
  { path: 'url', component: MenuComponent },
  {path: 'entrance', component: EntranceComponent},
  {path: 'user-page', component: UserPageComponent, children: [{path: 'stats', component: StatisticsComponent }]},
  {path: 'admin', component: AdminComponent, children: [
      {path: 'admin-page-users', component: AdminPageBanComponent},
      {path: 'admin-page-tests', component: AdminPageComponent},
      {path: 'admin-questions', component: AdminQuestionsComponentComponent}]},
  // путь к про приложение
  {path: 'main-page', component: MainPageComponent, children: [{path: 'reg-form', component: RegFormComponent}]},
  { path: 'create-test', component: CreateTestComponent, children: [{path: 'create-question', component: CreateQuestionComponent}] },
  {path: 'test-passing/:id', component: TestPassingComponent, children: [{path: 'question-passing', component: QuestionPassingComponent}]},
  {path: 'authorisation-error', component: NoAuthorizeComponent},
  {path: 'ask-admin', component: ForAdminQuestionComponent}
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
    StatisticsComponent,
    MainPageComponent,
    TestPassingComponent,
    CreateQuestionComponent,
    QuestionPassingComponent,
    ForAdminQuestionComponent,
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
    RouterModule.forRoot(appRoutes),
    MatListModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
