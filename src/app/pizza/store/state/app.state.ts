import { RouterReducerState } from '@ngrx/router-store';

import { IFormsState, initialFormsState } from './forms.state';


export interface IAppState {
  router?: RouterReducerState;
  forms: IFormsState;
}

export const initialAppState: IAppState = {
  forms: initialFormsState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
