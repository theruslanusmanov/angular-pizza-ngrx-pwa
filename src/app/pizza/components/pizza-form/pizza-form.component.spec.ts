import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaFormComponent } from './pizza-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PizzaFormComponent', () => {
  let component: PizzaFormComponent;
  let fixture: ComponentFixture<PizzaFormComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ PizzaFormComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ {provide: FormBuilder, useValue: formBuilder} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFormComponent);
    component = fixture.componentInstance;

    component.form = formBuilder.group({
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
