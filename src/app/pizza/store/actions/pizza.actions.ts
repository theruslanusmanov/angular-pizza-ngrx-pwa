import { Action } from '@ngrx/store';
import { IPizza } from '../../models/pizza';

export enum EPizzaActions {
    GetPizzas = '[Pizza] Get Pizzas',
    GetPizzasSuccess = '[Pizza] Get Pizzas Success'
}

export class GetPizzas implements Action {
    public readonly type = EPizzaActions.GetPizzas;
}

export class GetPizzasSuccess implements Action {
    public readonly type = EPizzaActions.GetPizzasSuccess;
    constructor(public payload: IPizza[]) { }
}

export type PizzaActions = GetPizzas | GetPizzasSuccess;
