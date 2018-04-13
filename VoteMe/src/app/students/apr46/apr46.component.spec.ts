import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr46Component } from './apr46.component';

describe('Apr46Component', () => {
  let component: Apr46Component;
  let fixture: ComponentFixture<Apr46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apr46Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apr46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
