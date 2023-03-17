import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandGrandChild2Component } from './grand-grand-child2.component';

describe('GrandGrandChild2Component', () => {
  let component: GrandGrandChild2Component;
  let fixture: ComponentFixture<GrandGrandChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandGrandChild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandGrandChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
