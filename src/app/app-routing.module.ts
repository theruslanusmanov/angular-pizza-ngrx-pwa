import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaContainerComponent } from './pizza/containers/pizza-container/pizza-container.component';

const routes: Routes = [
    { path: 'pizzas', component: PizzaContainerComponent },
    { path: '', redirectTo: '/pizzas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
