import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ph485Component } from './ph485.component';

describe('Ph485Component', () => {
  let component: Ph485Component;
  let fixture: ComponentFixture<Ph485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ph485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ph485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
