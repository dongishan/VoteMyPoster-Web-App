import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfbm3Component } from './mfbm3.component';

describe('Mfbm3Component', () => {
  let component: Mfbm3Component;
  let fixture: ComponentFixture<Mfbm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mfbm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mfbm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
