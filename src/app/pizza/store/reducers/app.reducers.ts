import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { pizzaReducers } from './pizza.reducers';
import { formsReducers } from './forms.reducers';

export const appReducers: ActionReducerMap<IAppState> = {
  router: routerReducer,
  pizzas: pizzaReducers,
  forms: formsReducers
};
