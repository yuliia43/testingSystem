import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatIconModule, MatInputModule, MatMenuModule, MatTableModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {CreateTestComponent} from './create-test.component';
import {CreateTaskComponent} from '../create-task/create-task.component';

const createtestRoutes: Routes = [
  { path: 'create-task', component: CreateTaskComponent }
];

@NgModule({
  declarations: [
    CreateTestComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(createtestRoutes),
    MatTableModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [ToasterService],
  bootstrap: [CreateTestComponent]
})
export class CreateTestModule { }
