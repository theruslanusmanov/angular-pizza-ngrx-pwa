import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
	selector: 'app-pizza-form-creator',
	templateUrl: './pizza-form-creator.component.html',
	styleUrls: ['./pizza-form-creator.component.scss']
})
export class PizzaFormCreatorComponent implements OnInit {
	@Input()
	pizzas: FormArray;
		
	toppings = [
		'anchovy', 'bacon', 'basil', 'chili', 'mozzarella', 'mushroom',
		'olive', 'onion', 'pepper', 'pepperoni', 'sweetcorn', 'tomato'
	];

	value: string[] = [];
	focused: string;

	constructor() { }

	ngOnInit() { }
}
