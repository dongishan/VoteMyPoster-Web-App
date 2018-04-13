import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bd389Component } from './bd389.component';

describe('Bd389Component', () => {
  let component: Bd389Component;
  let fixture: ComponentFixture<Bd389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bd389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bd389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
