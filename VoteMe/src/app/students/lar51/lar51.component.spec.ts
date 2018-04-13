import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lar51Component } from './lar51.component';

describe('Lar51Component', () => {
  let component: Lar51Component;
  let fixture: ComponentFixture<Lar51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lar51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lar51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
