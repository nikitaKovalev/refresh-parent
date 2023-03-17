import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandGrandChild3Component } from './grand-grand-child3.component';

describe('GrandGrandChild3Component', () => {
  let component: GrandGrandChild3Component;
  let fixture: ComponentFixture<GrandGrandChild3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandGrandChild3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandGrandChild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
