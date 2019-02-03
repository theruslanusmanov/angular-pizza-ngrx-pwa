import { Component, OnInit, Input } from '@angular/core';
import { selectFormSteps } from '../../store/selectors/forms.selector';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../store/state/app.state';
import { UpdateSteps } from '../../store/actions/forms.actions';

@Component({
  selector: 'app-pizza-form-steps',
  templateUrl: './pizza-form-steps.component.html',
  styleUrls: ['./pizza-form-steps.component.scss']
})
export class PizzaFormStepsComponent implements OnInit {
  public percentage: number;
  steps$: Observable<number> = this.store.pipe(select(selectFormSteps));

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new UpdateSteps(10));
    this.steps$.subscribe(value => this.percentage = value);
  }
}
