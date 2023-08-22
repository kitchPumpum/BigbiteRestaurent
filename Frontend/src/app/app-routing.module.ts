import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { OrderOnlineComponent } from './order-online/order-online.component';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SingupComponent } from './singup/singup.component';

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

  {  path: 'order-online', component: OrderOnlineComponent },

  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'signup',
    component: SingupComponent

  },
  {
    path: 'contact-us',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
