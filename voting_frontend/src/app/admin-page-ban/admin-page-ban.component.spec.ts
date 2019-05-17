import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageBanComponent } from './admin-page-ban.component';

describe('AdminPageBanComponent', () => {
  let component: AdminPageBanComponent;
  let fixture: ComponentFixture<AdminPageBanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageBanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
