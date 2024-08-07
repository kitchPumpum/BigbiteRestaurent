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
import { AboutUsComponent } from './about-us/about-us.component';
import { SalesdashboardComponent } from './salesdashboard/salesdashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { ReservationdashboardComponent } from './reservationdashboard/reservationdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { OrderconfirmationComponent } from './orderconfirmation/orderconfirmation.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';

import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ChefaccountComponent } from './chefaccount/chefaccount.component';
import { MenudashboardComponent } from './menudashboard/menudashboard.component';
import { EmployeeComponent } from './employee/employee.component';


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
  { path: 'itemdetails', component: ItemdetailsComponent},

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
  },
   {
    path: 'about-us',
    component: AboutUsComponent
   },
   {
    path: 'admin',
    component: AdmindashboardComponent,
    children: [
      { path: '', component: AdminLandingComponent }, // Default route
      { path: 'customer-dashboard', component: CustomerdashboardComponent },
      { path: 'sales-dashboard', component: SalesdashboardComponent },
      { path: 'reservation-dashboard', component: ReservationdashboardComponent },
      { path: 'menu-dashboard', component: MenudashboardComponent },
      { path: 'employee', component: EmployeeComponent },

    ],
  },


   {path:'checkout',
   component:CheckoutComponent
  },

   {
    path: 'my-account',
    component: MyAccountComponent
   },
   {
    path: 'order-confirmation',
    component: OrderconfirmationComponent
   },
   {
    path: 'orderhistory',
    component: OrderhistoryComponent
   },
   {
    path: 'kitchen',
    component: KitchenComponent
   },
   {
    path: 'chefaccount',
    component: ChefaccountComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
