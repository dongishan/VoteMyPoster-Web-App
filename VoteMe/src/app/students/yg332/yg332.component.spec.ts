import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Yg332Component } from './yg332.component';

describe('Yg332Component', () => {
  let component: Yg332Component;
  let fixture: ComponentFixture<Yg332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Yg332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Yg332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
