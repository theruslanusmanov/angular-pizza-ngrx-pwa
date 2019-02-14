import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { selectFormSummary } from '../../store/selectors/forms.selector';
import { UpdateSteps } from '../../store/actions/forms.actions';

@Component({
  selector: 'app-pizza-form-summary',
  templateUrl: './pizza-form-summary.component.html',
  styleUrls: ['./pizza-form-summary.component.scss']
})
export class PizzaFormSummaryComponent implements OnInit {
  summary$: Observable<number> = this.store.pipe(select(selectFormSummary));
  price;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.summary$.subscribe(value => {
      this.price = value;
    });
  }
}
