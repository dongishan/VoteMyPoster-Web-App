import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cc922Component } from './cc922.component';

describe('Cc922Component', () => {
  let component: Cc922Component;
  let fixture: ComponentFixture<Cc922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cc922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cc922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
