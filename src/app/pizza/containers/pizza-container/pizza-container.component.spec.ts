import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaContainerComponent } from './pizza-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PizzaContainerComponent', () => {
  let component: PizzaContainerComponent;
  let fixture: ComponentFixture<PizzaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaContainerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
