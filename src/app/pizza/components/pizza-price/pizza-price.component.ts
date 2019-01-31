import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-price',
  templateUrl: './pizza-price.component.html',
  styleUrls: ['./pizza-price.component.scss']
})
export class PizzaPriceComponent implements OnInit {

  price = 1000;

  constructor() { }

  ngOnInit() {
  }

}
