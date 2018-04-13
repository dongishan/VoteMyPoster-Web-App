import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsm85Component } from './jsm85.component';

describe('Jsm85Component', () => {
  let component: Jsm85Component;
  let fixture: ComponentFixture<Jsm85Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jsm85Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jsm85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
