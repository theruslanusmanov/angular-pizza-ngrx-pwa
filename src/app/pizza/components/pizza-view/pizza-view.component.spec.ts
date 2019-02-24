import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaViewComponent } from './pizza-view.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';

describe('PizzaViewComponent', () => {
  let component: PizzaViewComponent;
  let fixture: ComponentFixture<PizzaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [ PizzaViewComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [Store]
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
