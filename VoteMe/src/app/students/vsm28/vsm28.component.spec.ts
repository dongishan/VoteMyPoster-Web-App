import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vsm28Component } from './vsm28.component';

describe('Vsm28Component', () => {
  let component: Vsm28Component;
  let fixture: ComponentFixture<Vsm28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vsm28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vsm28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
