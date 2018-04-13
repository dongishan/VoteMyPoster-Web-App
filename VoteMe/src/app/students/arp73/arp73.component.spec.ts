import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Arp73Component } from './arp73.component';

describe('Arp73Component', () => {
  let component: Arp73Component;
  let fixture: ComponentFixture<Arp73Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Arp73Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Arp73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
