import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPriceComponent } from './pizza-price.component';
import { StoreModule, Store } from '@ngrx/store';

describe('PizzaPriceComponent', () => {
  let component: PizzaPriceComponent;
  let fixture: ComponentFixture<PizzaPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [ PizzaPriceComponent ],
      providers: [Store]
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
