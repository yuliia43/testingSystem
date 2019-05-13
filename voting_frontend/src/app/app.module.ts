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
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatRadioModule
} from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { QuestionComponent } from './question/question.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EntranceComponent } from './entrance/entrance.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ResultComponent } from './result/result.component';

// ТУТ ХРАНЯТСЯ ССЫЛКИ ДЛЯ КОМПОНЕНТОВ
const appRoutes: Routes = [
  { path: 'table', component: TableComponent, children: [{path: 'test-box', component: TestBoxComponent,
      children: [{path: 'result', component: ResultComponent}]}]},
  { path: 'reg-form', component: RegFormComponent },
  { path: 'url', component: MenuComponent },
  {path: 'entrance', component: EntranceComponent},
  {path: 'user-page', component: UserPageComponent},
  { path: 'create-test', component: CreateTestComponent, children: [{path: 'create-task', component: CreateTaskComponent}]}
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
    CreateTaskComponent,
    EntranceComponent,
    UserPageComponent,
    ResultComponent
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
    MatRadioModule
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
