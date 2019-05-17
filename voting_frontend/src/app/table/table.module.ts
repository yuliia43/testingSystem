import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TableComponent } from './table.component';
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
import {TestBoxComponent} from '../test-box/test-box.component';
import {ResultComponent} from '../result/result.component';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
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
  bootstrap: [TableComponent]
})
export class TableModule { }
