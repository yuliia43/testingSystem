import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatIconModule, MatInputModule, MatMenuModule, MatTableModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {QuestionPassingComponent} from '../question-passing/question-passing.component';
import {TestPassingComponent} from './test-passing.component';

const testpassingRoutes: Routes = [
  { path: 'question-passing', component: QuestionPassingComponent }
];

@NgModule({
  declarations: [
    TestPassingComponent,
    QuestionPassingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(testpassingRoutes),
    MatTableModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [ToasterService],
  bootstrap: [TestPassingComponent]
})
export class CreateTestModule { }
