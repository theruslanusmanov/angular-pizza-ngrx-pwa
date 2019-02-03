import { Action } from '@ngrx/store';
import { ITopping } from '../../models/topping.interface';

export enum EFormsActions {
    UpdateForm = '[Forms] Update Form',
    UpdateSteps = '[Forms] Update Steps',
    UpdateSummary = '[Forms] Update Summary'
}

export class UpdateForm implements Action {
    public readonly type = EFormsActions.UpdateForm;
    constructor(public payload: ITopping[]) {}
}

export class UpdateSteps implements Action {
    public readonly type = EFormsActions.UpdateSteps;
    constructor(public payload: number) {}
}

export class UpdateSummary implements Action {
    public readonly type = EFormsActions.UpdateSummary;
    constructor(public payload: number) {}
}

export type FormsActions = UpdateForm | UpdateSteps | UpdateSummary;