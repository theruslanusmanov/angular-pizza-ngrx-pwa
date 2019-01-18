import { RouterReducerState } from '@ngrx/router-store';

import { IPizzaState, initialPizzaState } from './pizza.state';


export interface IAppState {
  router?: RouterReducerState;
  pizzas: IPizzaState;
}

export const initialAppState: IAppState = {
  pizzas: initialPizzaState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
