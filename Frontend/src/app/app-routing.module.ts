import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
  {
    path: '',
    component: BodyComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
