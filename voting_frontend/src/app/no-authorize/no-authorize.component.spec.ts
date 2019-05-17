import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAuthorizeComponent } from './no-authorize.component';

describe('NoAuthorizeComponent', () => {
  let component: NoAuthorizeComponent;
  let fixture: ComponentFixture<NoAuthorizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAuthorizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAuthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
