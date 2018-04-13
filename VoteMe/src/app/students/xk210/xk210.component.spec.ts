import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Xk210Component } from './xk210.component';

describe('Xk210Component', () => {
  let component: Xk210Component;
  let fixture: ComponentFixture<Xk210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xk210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xk210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
