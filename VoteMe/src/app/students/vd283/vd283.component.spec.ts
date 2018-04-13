import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd283Component } from './vd283.component';

describe('Vd283Component', () => {
  let component: Vd283Component;
  let fixture: ComponentFixture<Vd283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vd283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
