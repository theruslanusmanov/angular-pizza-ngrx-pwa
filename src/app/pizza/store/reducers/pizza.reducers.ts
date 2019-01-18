import { EPizzaActions } from './../actions/pizza.actions';
import { PizzaActions } from '../actions/pizza.actions';
import { initialPizzaState, IPizzaState } from '../state/pizza.state';

export const pizzaReducers = (
    state = initialPizzaState,
    action: PizzaActions
): IPizzaState => {
    switch (action.type) {
        default:
            return state;
    }
}