import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { PizzaFormDetailsComponent } from './pizza-form-details.component';

describe('PizzaFormDetailsComponent', () => {
  let component: PizzaFormDetailsComponent;
  let fixture: ComponentFixture<PizzaFormDetailsComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        PizzaFormDetailsComponent
      ],
      providers: [ {provide: FormBuilder, useValue: formBuilder} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFormDetailsComponent);
    component = fixture.componentInstance;

    component.parent = formBuilder.group({
      details: formBuilder.group({
        name: null,
        email: null,
        phone: null,
        address: null
      }),
      toppings: formBuilder.group({
        toppings: [[]]
      }),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
