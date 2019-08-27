import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterwoschemeComponent } from './registerwoscheme.component';

describe('RegisterwoschemeComponent', () => {
  let component: RegisterwoschemeComponent;
  let fixture: ComponentFixture<RegisterwoschemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterwoschemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterwoschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
