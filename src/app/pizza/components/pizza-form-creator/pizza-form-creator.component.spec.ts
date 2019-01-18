import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaFormCreatorComponent } from './pizza-form-creator.component';

describe('PizzaFormCreatorComponent', () => {
  let component: PizzaFormCreatorComponent;
  let fixture: ComponentFixture<PizzaFormCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaFormCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFormCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
