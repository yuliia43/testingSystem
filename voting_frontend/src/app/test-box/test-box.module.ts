import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TestBoxComponent } from './test-box.component';
import {
  MatButtonModule, MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatRadioModule,
  MatTableModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {ResultComponent} from '../result/result.component';

const testboxRoutes: Routes = [
  { path: 'result', component: ResultComponent }
];
@NgModule({
  declarations: [
    ResultComponent,
    TestBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(testboxRoutes),
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatRadioModule
  ],
  providers: [ToasterService],
  bootstrap: [TestBoxComponent]
})

export class TestBoxModule { }
