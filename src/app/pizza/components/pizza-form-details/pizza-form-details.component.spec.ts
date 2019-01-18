import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaFormDetailsComponent } from './pizza-form-details.component';

describe('PizzaFormDetailsComponent', () => {
  let component: PizzaFormDetailsComponent;
  let fixture: ComponentFixture<PizzaFormDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaFormDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
