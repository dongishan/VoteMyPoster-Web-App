import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aa2020Component } from './aa2020.component';

describe('Aa2020Component', () => {
  let component: Aa2020Component;
  let fixture: ComponentFixture<Aa2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aa2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aa2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
