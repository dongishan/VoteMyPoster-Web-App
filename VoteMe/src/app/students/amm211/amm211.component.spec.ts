import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Amm211Component } from './amm211.component';

describe('Amm211Component', () => {
  let component: Amm211Component;
  let fixture: ComponentFixture<Amm211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Amm211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Amm211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
