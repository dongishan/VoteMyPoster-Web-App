import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp869Component } from './sp869.component';

describe('Sp869Component', () => {
  let component: Sp869Component;
  let fixture: ComponentFixture<Sp869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sp869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
