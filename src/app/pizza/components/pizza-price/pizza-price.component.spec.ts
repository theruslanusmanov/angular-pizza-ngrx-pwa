import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPriceComponent } from './pizza-price.component';

describe('PizzaPriceComponent', () => {
  let component: PizzaPriceComponent;
  let fixture: ComponentFixture<PizzaPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
