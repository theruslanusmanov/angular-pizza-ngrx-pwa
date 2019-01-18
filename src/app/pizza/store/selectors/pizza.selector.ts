import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IPizzaState } from '../state/pizza.state';

const selectPizzas = (state: IAppState) => state.pizzas;

export const selectPizzaList = createSelector(
  selectPizzas,
  (state: IPizzaState) => state.pizzas
);
