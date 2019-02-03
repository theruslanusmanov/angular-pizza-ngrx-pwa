import { ITopping } from '../../models/topping.interface';

export interface IFormsState {
    toppings: ITopping[];
    steps: number;
}

export const initialFormsState: IFormsState = {
    toppings: null,
    steps: null
};