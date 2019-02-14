import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaViewComponent } from './components/pizza-view/pizza-view.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaContainerComponent } from './containers/pizza-container/pizza-container.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaFormDetailsComponent } from './components/pizza-form-details/pizza-form-details.component';
import { PizzaFormSummaryComponent } from './components/pizza-form-summary/pizza-form-summary.component';
import { appReducers } from './store/reducers/app.reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { PizzaFormStepsComponent } from './components/pizza-form-steps/pizza-form-steps.component';
import { PizzaToppingsComponent } from './components/pizza-toppings/pizza-toppings.component';
import { PizzaPriceComponent } from './components/pizza-price/pizza-price.component';


@NgModule({
  declarations: [
    PizzaContainerComponent,
    PizzaViewComponent,
    PizzaFormComponent,
    PizzaFormDetailsComponent,
    PizzaFormSummaryComponent,
    PizzaFormStepsComponent,
    PizzaToppingsComponent,
    PizzaPriceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  exports: [
    PizzaContainerComponent
  ]
})
export class PizzaModule { }
