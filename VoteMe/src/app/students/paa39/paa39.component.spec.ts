import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paa39Component } from './paa39.component';

describe('Paa39Component', () => {
  let component: Paa39Component;
  let fixture: ComponentFixture<Paa39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paa39Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paa39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
