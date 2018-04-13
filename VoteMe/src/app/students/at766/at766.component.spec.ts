import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { At766Component } from './at766.component';

describe('At766Component', () => {
  let component: At766Component;
  let fixture: ComponentFixture<At766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ At766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(At766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
