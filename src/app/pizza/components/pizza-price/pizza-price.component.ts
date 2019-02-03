import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppState } from '../../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectFormSummary } from '../../store/selectors/forms.selector';

@Component({
  selector: 'app-pizza-price',
  templateUrl: './pizza-price.component.html',
  styleUrls: ['./pizza-price.component.scss']
})
export class PizzaPriceComponent implements OnInit {
  summary$: Observable<number> = this.store.pipe(select(selectFormSummary));
  price = 1000;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.summary$.subscribe(value => {
      this.price = value;
    })
  }

}
