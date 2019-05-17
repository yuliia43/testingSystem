import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuestionsComponentComponent } from './admin-questions-component.component';

describe('AdminQuestionsComponentComponent', () => {
  let component: AdminQuestionsComponentComponent;
  let fixture: ComponentFixture<AdminQuestionsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuestionsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuestionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
