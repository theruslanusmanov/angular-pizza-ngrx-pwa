import { Component, Input, forwardRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ITopping } from '../../models/topping.interface';

const PIZZA_TOPPINGS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PizzaToppingsComponent),
  multi: true
};

@Component({
  selector: 'app-pizza-toppings',
  providers: [PIZZA_TOPPINGS_ACCESSOR],
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.scss']
})
export class PizzaToppingsComponent implements ControlValueAccessor {
  @Input()
  parent: FormGroup;

  toppings: ITopping[] = [
    { name: 'anchovy', price: 1 },
    { name: 'bacon', price: 1 },
    { name: 'basil', price: 1 },
    { name: 'chili', price: 1 },
    { name: 'mozzarella', price: 1 },
    { name: 'mushroom', price: 1 },
    { name: 'olive', price: 1 },
    { name: 'onion', price: 1 },
    { name: 'pepper', price: 1 },
    { name: 'pepperoni', price: 1 },
    { name: 'sweetcorn', price: 1 },
    { name: 'tomato', price: 1 },
  ];

  value: ITopping[] = [];
  focused: ITopping;

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  writeValue(value) {
    this.value = value;
  }

  updateTopping(topping: ITopping) {
    if (this.value.includes(topping)) {
      this.value = this.value.filter((x: ITopping) => topping !== x);
    } else {
      this.value = this.value.concat([topping]);
    }
    this.onModelChange(this.value);
  }

  onBlur(value: ITopping) {
    this.focused = null;
  }

  onFocus(value: ITopping) {
    this.focused = value;
    this.onTouch();
  }
}
