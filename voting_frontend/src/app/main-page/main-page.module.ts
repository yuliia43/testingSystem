import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {StatisticsComponent} from '../statistics/statistics.component';
import {MainPageComponent} from './main-page.component';
import {RegFormComponent} from '../reg-form/reg-form.component';
import {MatIconModule, MatInputModule} from "@angular/material";

@NgModule({
  declarations: [
    MainPageComponent,
    RegFormComponent
  ],
  imports: [
    RouterModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class MainPageModule {
  constructor(private router: Router) {}
}
