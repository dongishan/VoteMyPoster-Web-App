import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bis24Component } from './bis24.component';

describe('Bis24Component', () => {
  let component: Bis24Component;
  let fixture: ComponentFixture<Bis24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bis24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bis24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
