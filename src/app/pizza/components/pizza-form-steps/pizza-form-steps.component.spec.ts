import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaFormStepsComponent } from './pizza-form-steps.component';
import { StoreModule, Store } from '@ngrx/store';

describe('PizzaFormStepsComponent', () => {
  let component: PizzaFormStepsComponent;
  let fixture: ComponentFixture<PizzaFormStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [ PizzaFormStepsComponent ],
      providers: [Store]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFormStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
