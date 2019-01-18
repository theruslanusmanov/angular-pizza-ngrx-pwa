import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaFormSummaryComponent } from './pizza-form-summary.component';

describe('PizzaFormSummaryComponent', () => {
  let component: PizzaFormSummaryComponent;
  let fixture: ComponentFixture<PizzaFormSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaFormSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFormSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
