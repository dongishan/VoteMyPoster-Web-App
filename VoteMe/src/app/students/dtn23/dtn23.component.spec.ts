import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dtn23Component } from './dtn23.component';

describe('Dtn23Component', () => {
  let component: Dtn23Component;
  let fixture: ComponentFixture<Dtn23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dtn23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dtn23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
