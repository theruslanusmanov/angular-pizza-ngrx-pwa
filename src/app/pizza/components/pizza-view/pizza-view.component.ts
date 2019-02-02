import { Component } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
import { selectFormsList } from '../../store/selectors/forms.selector';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { ITopping } from '../../models/topping.interface';
import { Observable } from 'rxjs';

export const DROP_ANIMATION = trigger('drop', [
  transition(':enter', [
    style({ transform: 'translateY(-200px)', opacity: 0 }),
    animate('300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', style({ transform: 'translateY(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate('200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', style({ transform: 'translateY(-200px)', opacity: 0 }))
  ])
]);

@Component({
  selector: 'app-pizza-view',
  animations: [DROP_ANIMATION],
  templateUrl: './pizza-view.component.html',
  styleUrls: ['./pizza-view.component.scss']
})
export class PizzaViewComponent {
  toppings$: Observable<ITopping[]> = this.store.pipe(select(selectFormsList));

  constructor(private store: Store<IAppState>) { }
}
