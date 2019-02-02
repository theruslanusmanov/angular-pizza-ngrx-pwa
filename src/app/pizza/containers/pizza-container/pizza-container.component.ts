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
      phone: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(3)]],
    }, { validator: PizzaValidator.checkEmailsMatch }),
    toppings: this.fb.group({
      toppings: [[]]
    })
  });

  constructor(private store: Store<IAppState>, private fb: FormBuilder) { }

  ngOnInit() {
    this.store.dispatch(new GetPizzas());
  }
}
