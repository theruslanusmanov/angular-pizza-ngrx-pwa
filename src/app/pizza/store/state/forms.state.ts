import { ITopping } from '../../models/topping.interface';

export interface IFormsState {
    toppings: ITopping[];
}

export const initialFormsState: IFormsState = {
    toppings: null
};