import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mb2035Component } from './mb2035.component';

describe('Mb2035Component', () => {
  let component: Mb2035Component;
  let fixture: ComponentFixture<Mb2035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mb2035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mb2035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
