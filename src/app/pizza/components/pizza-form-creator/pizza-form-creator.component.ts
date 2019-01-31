import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pizza-form-creator',
	templateUrl: './pizza-form-creator.component.html',
	styleUrls: ['./pizza-form-creator.component.scss']
})
export class PizzaFormCreatorComponent implements OnInit {

	toppings = [
		'anchovy', 'bacon', 'basil', 'chili', 'mozzarella', 'mushroom',
		'olive', 'onion', 'pepper', 'pepperoni', 'sweetcorn', 'tomato'
	];

	value: string[] = [];
  focused: string;

	constructor() { }

	ngOnInit() {}
}
