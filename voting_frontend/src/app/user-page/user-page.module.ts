import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {StatisticsComponent} from '../statistics/statistics.component';
import {RegFormComponent} from '../reg-form/reg-form.component';
import {UserPageComponent} from "./user-page.component";
import {TestBoxComponent} from "../test-box/test-box.component";
import {ResultComponent} from "../result/result.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToasterModule} from "angular2-toaster";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule, MatCardModule, MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule, MatRadioModule,
  MatTableModule
} from "@angular/material";

const routes: Routes = [
  { path: 'stats', component: StatisticsComponent}
];

@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    RouterModule,
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
    RouterModule.forChild(routes),
    MatListModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [UserPageComponent]
})
export class UserPageModule {
  constructor(private router: Router) {}
}
