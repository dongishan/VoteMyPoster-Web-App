import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mm893Component } from './mm893.component';

describe('Mm893Component', () => {
  let component: Mm893Component;
  let fixture: ComponentFixture<Mm893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mm893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mm893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
