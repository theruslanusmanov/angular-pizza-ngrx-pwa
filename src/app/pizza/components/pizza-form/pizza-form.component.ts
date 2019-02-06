import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { UpdateForm, UpdateSteps, UpdateSummary } from '../../store/actions/forms.actions';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent implements OnInit {
  showFormDetails = true;
  showFormToppings = false;
  showFormConfirmation = false;

  form: FormGroup = this.fb.group({
    details: this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(3)]],
    }),
    toppings: this.fb.group({
      toppings: [[]]
    })
  });

  constructor(private store: Store<IAppState>, private fb: FormBuilder) { }

  onNext(e) {
    if (this.form.get('details').valid) {
      this.showFormDetails = false;
      this.showFormToppings = true;
      this.showFormConfirmation = false;
    }
    if (this.form.get('details').valid && this.form.get('toppings').touched) {
      this.showFormDetails = false;
      this.showFormToppings = false;
      this.showFormConfirmation = true;
    }
  }

  ngOnInit() {
    // On details form section actions
    this.form.get('details')
      .valueChanges
      .subscribe(inputs => {
        if (inputs.name) {
          this.store.dispatch(new UpdateSteps(30));
        }
        if (inputs.name && inputs.email) {
          this.store.dispatch(new UpdateSteps(40));
        }
        if (inputs.name && inputs.email && inputs.address) {
          this.store.dispatch(new UpdateSteps(50));
        }
        if (inputs.name && inputs.email && inputs.address && inputs.phone) {
          this.store.dispatch(new UpdateSteps(60));
        }
      });
    // On toppings form section actions
    this.form.get('toppings')
      .valueChanges
      .subscribe(value => {
        if (this.form.get('details').valid) {
          this.store.dispatch(new UpdateForm(value.toppings));
          let summary: number = 0;
          value.toppings.forEach(topping => {
            summary += topping.price;
          });
          this.store.dispatch(new UpdateSummary(summary));
          this.store.dispatch(new UpdateSteps(80));
        }
      });
  }
}
