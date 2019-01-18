import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { PizzaService } from '../../services/pizza.service';
import { GetPizzas, GetPizzasSuccess, EPizzaActions } from '../actions/pizza.actions';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class PizzaEffects {

    @Effect()
    getPizzas$ = this.actions$.pipe(
        ofType<GetPizzas>(EPizzaActions.GetPizzas),
        switchMap(() => this.pizzaService.getPizzas()),
        switchMap((user) => of(new GetPizzasSuccess(user)))
    );

    constructor(
        private pizzaService: PizzaService,
        private actions$: Actions) {}
}