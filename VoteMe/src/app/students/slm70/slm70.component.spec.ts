import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slm70Component } from './slm70.component';

describe('Slm70Component', () => {
  let component: Slm70Component;
  let fixture: ComponentFixture<Slm70Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slm70Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slm70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
