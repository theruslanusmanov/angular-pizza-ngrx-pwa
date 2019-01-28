import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pizza-form-steps',
  templateUrl: './pizza-form-steps.component.html',
  styleUrls: ['./pizza-form-steps.component.scss']
})
export class PizzaFormStepsComponent implements OnInit {
  @Input()
  public percentage: number;

  constructor() { }

  ngOnInit() {
    if (!this.percentage) {
      this.percentage = 0;
    }
  }
}
