import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaFormSummaryComponent } from './pizza-form-summary.component';
import { StoreModule, Store } from '@ngrx/store';

describe('PizzaFormSummaryComponent', () => {
  let component: PizzaFormSummaryComponent;
  let fixture: ComponentFixture<PizzaFormSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [ PizzaFormSummaryComponent ],
      providers: [Store]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFormSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
