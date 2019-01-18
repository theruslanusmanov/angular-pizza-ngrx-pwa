import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaContainerComponent } from './pizza-container.component';

describe('PizzaContainerComponent', () => {
  let component: PizzaContainerComponent;
  let fixture: ComponentFixture<PizzaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaContainerComponent ]
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
