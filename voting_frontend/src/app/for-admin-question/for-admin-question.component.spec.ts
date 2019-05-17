import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForAdminQuestionComponent } from './for-admin-question.component';

describe('ForAdminQuestionComponent', () => {
  let component: ForAdminQuestionComponent;
  let fixture: ComponentFixture<ForAdminQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForAdminQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForAdminQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
