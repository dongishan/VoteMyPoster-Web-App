import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sm2205Component } from './sm2205.component';

describe('Sm2205Component', () => {
  let component: Sm2205Component;
  let fixture: ComponentFixture<Sm2205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sm2205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sm2205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
