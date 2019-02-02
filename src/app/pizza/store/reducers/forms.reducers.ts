import { initialFormsState, IFormsState } from '../state/forms.state';
import { FormsActions, EFormsActions } from '../actions/forms.action';

export const formsReducers = (
    state = initialFormsState,
    action: FormsActions
): IFormsState => {
    switch (action.type) {
        case EFormsActions.UpdateForm: {
            return {
                ...state,
                toppings: action.payload
            }
        }
        default:
            return state;
    }
}