import { RouterReducerState } from '@ngrx/router-store';

import { IPizzaState, initialPizzaState } from './pizza.state';
import { IFormsState, initialFormsState } from './forms.state';


export interface IAppState {
  router?: RouterReducerState;
  pizzas: IPizzaState;
  forms: IFormsState;
}

export const initialAppState: IAppState = {
  pizzas: initialPizzaState,
  forms: initialFormsState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
