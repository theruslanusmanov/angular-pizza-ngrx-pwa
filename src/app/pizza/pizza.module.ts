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
import { PizzaFormCreatorComponent } from './components/pizza-form-creator/pizza-form-creator.component';
import { PizzaFormSummaryComponent } from './components/pizza-form-summary/pizza-form-summary.component';
import { PizzaEffects } from './store/effects/pizza.effects';
import { EffectsModule } from '@ngrx/effects';
import { PizzaService } from './services/pizza.service';
import { appReducers } from './store/reducers/app.reducers';


@NgModule({
  declarations: [
    PizzaContainerComponent,
    PizzaViewComponent, 
    PizzaFormComponent, PizzaFormDetailsComponent, PizzaFormCreatorComponent, PizzaFormSummaryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([PizzaEffects]),
  ],
  providers: [PizzaService],
  exports: [
    PizzaContainerComponent
  ]
})
export class PizzaModule { }
