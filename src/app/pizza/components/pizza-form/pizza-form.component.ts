import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PizzaValidator } from '../../validators/pizza.validator';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { UpdateForm } from '../../store/actions/forms.actions';
import { selectFormsList } from '../../store/selectors/forms.selector';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent implements OnInit {
  form: FormGroup = this.fb.group({
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
    this.form.get('toppings')
      .valueChanges
      .subscribe(value => {
        this.store.dispatch(new UpdateForm(value.toppings));
      });
  }
}
