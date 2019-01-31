import { IPizza } from './../../models/pizza'
import { ITopping } from '../../models/topping.interface';

export interface IPizzaState {
    pizzas: IPizza[];
    selectedPizza: IPizza;
    selectedToppings: ITopping[];
}

export const initialPizzaState: IPizzaState = {
    pizzas: null,
    selectedPizza: null,
    selectedToppings: null
}