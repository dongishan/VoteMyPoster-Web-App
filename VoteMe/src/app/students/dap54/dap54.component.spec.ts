import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dap54Component } from './dap54.component';

describe('Dap54Component', () => {
  let component: Dap54Component;
  let fixture: ComponentFixture<Dap54Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dap54Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dap54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
