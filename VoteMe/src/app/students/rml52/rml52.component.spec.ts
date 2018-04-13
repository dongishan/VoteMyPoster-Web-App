import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rml52Component } from './rml52.component';

describe('Rml52Component', () => {
  let component: Rml52Component;
  let fixture: ComponentFixture<Rml52Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rml52Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rml52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
