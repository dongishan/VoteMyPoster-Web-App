import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gd416Component } from './gd416.component';

describe('Gd416Component', () => {
  let component: Gd416Component;
  let fixture: ComponentFixture<Gd416Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gd416Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gd416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
