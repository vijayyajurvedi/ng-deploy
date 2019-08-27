import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PptpresentationComponent } from './pptpresentation.component';

describe('PptpresentationComponent', () => {
  let component: PptpresentationComponent;
  let fixture: ComponentFixture<PptpresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PptpresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PptpresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
