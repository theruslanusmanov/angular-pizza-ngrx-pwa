import { IPizza } from './../../models/pizza'

export interface IPizzaState {
    pizzas: IPizza[];
    selectedPizza: IPizza;
}

export const initialPizzaState: IPizzaState = {
    pizzas: null,
    selectedPizza: null
}