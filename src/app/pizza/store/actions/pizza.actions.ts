import { Action } from '@ngrx/store';
import { IPizza } from '../../models/pizza';
import { ITopping } from '../../models/topping.interface';

export enum EPizzaActions {
    GetPizzas = '[Pizza] Get Pizzas',
    GetPizzasSuccess = '[Pizza] Get Pizzas Success',
    GetToppings = '[Pizza] Get Toppings'
}

export class GetPizzas implements Action {
    public readonly type = EPizzaActions.GetPizzas;
}

export class GetPizzasSuccess implements Action {
    public readonly type = EPizzaActions.GetPizzasSuccess;
    constructor(public payload: IPizza[]) { }
}

export class GetToppings implements Action {
    public readonly type = EPizzaActions.GetToppings;
    constructor(public payload: ITopping[]) { }
}

export type PizzaActions = GetPizzas | GetPizzasSuccess | GetToppings;