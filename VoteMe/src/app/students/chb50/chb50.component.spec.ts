import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chb50Component } from './chb50.component';

describe('Chb50Component', () => {
  let component: Chb50Component;
  let fixture: ComponentFixture<Chb50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chb50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chb50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
