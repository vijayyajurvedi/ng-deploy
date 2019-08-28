import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginexistinguserComponent } from './loginexistinguser.component';

describe('LoginexistinguserComponent', () => {
  let component: LoginexistinguserComponent;
  let fixture: ComponentFixture<LoginexistinguserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginexistinguserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginexistinguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
