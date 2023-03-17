import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandGrandChild1Component } from './grand-grand-child1.component';

describe('GrandGrandChild1Component', () => {
  let component: GrandGrandChild1Component;
  let fixture: ComponentFixture<GrandGrandChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandGrandChild1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandGrandChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
