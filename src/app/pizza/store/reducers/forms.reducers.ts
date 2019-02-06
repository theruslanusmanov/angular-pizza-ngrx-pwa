import { initialFormsState, IFormsState } from '../state/forms.state';
import { FormsActions, EFormsActions } from '../actions/forms.actions';

export function formsReducers (
    state = initialFormsState,
    action: FormsActions
): IFormsState {
    switch (action.type) {
        case EFormsActions.UpdateForm:
            return {
                ...state,
                toppings: action.payload
            };
        case EFormsActions.UpdateSteps:
            return {
                ...state,
                steps: action.payload
            };
        case EFormsActions.UpdateSummary:
            return {
                ...state,
                summary: action.payload
            };
        default:
            return state;
    }
}
