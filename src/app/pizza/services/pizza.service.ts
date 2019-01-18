import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPizza } from '../models/pizza';

@Injectable()
export class PizzaService {
    private pizza: IPizza;

    constructor() { }

    getPizzas(): Observable<IPizza[]> {
        this.pizza = {
            id: 1,
            name: '12124',
            price: 123
        }
        return Observable.create(() => [this.pizza]);
    }
}
