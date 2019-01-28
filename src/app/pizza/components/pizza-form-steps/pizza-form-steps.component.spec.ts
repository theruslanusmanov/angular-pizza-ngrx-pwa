import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaFormStepsComponent } from './pizza-form-steps.component';

describe('PizzaFormStepsComponent', () => {
  let component: PizzaFormStepsComponent;
  let fixture: ComponentFixture<PizzaFormStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaFormStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFormStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
