import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ttdsz2Component } from './ttdsz2.component';

describe('Ttdsz2Component', () => {
  let component: Ttdsz2Component;
  let fixture: ComponentFixture<Ttdsz2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ttdsz2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ttdsz2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
