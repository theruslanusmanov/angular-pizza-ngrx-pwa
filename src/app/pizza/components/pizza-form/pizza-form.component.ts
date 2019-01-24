import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IPizza } from '../../models/pizza';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent implements OnInit {
  @Input()
  parent: FormGroup;

  @Input()
  pizzas: IPizza[];

  constructor() {

  }

  ngOnInit() {}

}
