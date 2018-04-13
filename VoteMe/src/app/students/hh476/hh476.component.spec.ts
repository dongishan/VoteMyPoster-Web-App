import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hh476Component } from './hh476.component';

describe('Hh476Component', () => {
  let component: Hh476Component;
  let fixture: ComponentFixture<Hh476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hh476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hh476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
