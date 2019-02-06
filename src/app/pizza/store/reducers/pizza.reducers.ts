import { EPizzaActions } from './../actions/pizza.actions';
import { PizzaActions } from '../actions/pizza.actions';
import { initialPizzaState, IPizzaState } from '../state/pizza.state';

export function pizzaReducers (
    state = initialPizzaState,
    action: PizzaActions
): IPizzaState {
    switch (action.type) {
        case EPizzaActions.GetPizzasSuccess: {
            return {
                ...state,
                pizzas: action.payload
            };
        }

        default:
            return state;
    }
}
