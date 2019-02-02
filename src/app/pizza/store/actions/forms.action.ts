import { Action } from '@ngrx/store';
import { ITopping } from '../../models/topping.interface';

export enum EFormsActions {
    UpdateForm = '[Forms] Update Form'
}

export class UpdateForm implements Action {
    public readonly type = EFormsActions.UpdateForm;
    constructor(public payload: ITopping[]) {}
}

export type FormsActions = UpdateForm;