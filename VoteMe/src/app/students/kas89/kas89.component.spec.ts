import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kas89Component } from './kas89.component';

describe('Kas89Component', () => {
  let component: Kas89Component;
  let fixture: ComponentFixture<Kas89Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kas89Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kas89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
