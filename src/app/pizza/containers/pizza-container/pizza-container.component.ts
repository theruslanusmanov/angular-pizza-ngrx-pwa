import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectPizzaList } from '../../store/selectors/pizza.selector';
import { GetPizzas } from '../../store/actions/pizza.actions';
import { FormBuilder, Validators } from '@angular/forms';
import { PizzaValidator } from '../../validators/pizza.validator';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-pizza-container',
  templateUrl: './pizza-container.component.html',
  styleUrls: ['./pizza-container.component.scss']
})
export class PizzaContainerComponent implements OnInit {
  pizzas$ = this.store.pipe(select(selectPizzaList))
  public stepAmount = 100 / 3;

  form = this.fb.group({
    details: this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      confirm: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(3)]],
      postcode: ['', [Validators.required, Validators.minLength(3)]]
    }, { validator: PizzaValidator.checkEmailsMatch }),
    pizzas: this.fb.array([
      this.createPizza()
    ])
  });

  constructor(private store: Store<IAppState>, private fb: FormBuilder) { }

  createPizza() {
    return this.fb.group({
      size: ['small', Validators.required],
      toppings: [[]]
    });
  }

  ngOnInit() {
    this.store.dispatch(new GetPizzas());
  }
}
