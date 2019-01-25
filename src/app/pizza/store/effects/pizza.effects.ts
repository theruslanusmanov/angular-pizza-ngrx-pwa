import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { PizzaService } from '../../services/pizza.service';
import { GetPizzas, GetPizzasSuccess, EPizzaActions } from '../actions/pizza.actions';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IPizzaHttp } from '../../models/http-models/pizza-http.interface';

@Injectable()
export class PizzaEffects {

    @Effect()
    getPizzas$ = this.actions$.pipe(
        ofType<GetPizzas>(EPizzaActions.GetPizzas),
        switchMap(() => this.pizzaService.getPizzas()),
        switchMap((pizzaHttp: IPizzaHttp) => of(new GetPizzasSuccess(pizzaHttp.pizzas)))
    );

    constructor(
        private pizzaService: PizzaService,
        private actions$: Actions
    ) { }
}