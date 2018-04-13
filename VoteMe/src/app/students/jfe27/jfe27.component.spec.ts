import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jfe27Component } from './jfe27.component';

describe('Jfe27Component', () => {
  let component: Jfe27Component;
  let fixture: ComponentFixture<Jfe27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jfe27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jfe27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
