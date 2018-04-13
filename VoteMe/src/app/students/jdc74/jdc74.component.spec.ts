import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jdc74Component } from './jdc74.component';

describe('Jdc74Component', () => {
  let component: Jdc74Component;
  let fixture: ComponentFixture<Jdc74Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jdc74Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jdc74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
