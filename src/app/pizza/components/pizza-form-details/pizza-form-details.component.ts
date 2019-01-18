import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pizza-form-details',
  templateUrl: './pizza-form-details.component.html',
  styleUrls: ['./pizza-form-details.component.scss']
})
export class PizzaFormDetailsComponent implements OnInit {
  @Input()
  parent: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
