import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPassingComponent } from './question-passing.component';

describe('QuestionPassingComponent', () => {
  let component: QuestionPassingComponent;
  let fixture: ComponentFixture<QuestionPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
