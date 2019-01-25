import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { IPizzaHttp } from '../models/http-models/pizza-http.interface';

@Injectable()
export class PizzaService {
    pizzasUrl = `${environment.apiUrl}pizzas.json`;

    constructor(private http: HttpClient) { }
  
    getPizzas(): Observable<IPizzaHttp> {
      return this.http.get<IPizzaHttp>(this.pizzasUrl);
    }
}
