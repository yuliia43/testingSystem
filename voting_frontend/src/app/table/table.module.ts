import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TableComponent } from './table.component';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatTableModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {TestBoxComponent} from '../test-box/test-box.component';
import {ResultComponent} from '../result/result.component';

const tableRoutes: Routes = [
  { path: 'test-box', component: TestBoxComponent, children: [{path: 'result', component: ResultComponent}] }
  ];
@NgModule({
  declarations: [
    TableComponent,
    TestBoxComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(tableRoutes),
    MatTableModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatListModule
  ],
  providers: [ToasterService],
  bootstrap: [TableComponent]
})
export class TableModule { }
