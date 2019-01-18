import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaViewComponent } from './pizza-view.component';

describe('PizzaViewComponent', () => {
  let component: PizzaViewComponent;
  let fixture: ComponentFixture<PizzaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
