import { IPizza } from './../../models/pizza'
import { ITopping } from '../../models/topping.interface';

export interface IPizzaState {
    pizzas: IPizza[];
    selectedPizza: IPizza;
}

export const initialPizzaState: IPizzaState = {
    pizzas: null,
    selectedPizza: null,
};
