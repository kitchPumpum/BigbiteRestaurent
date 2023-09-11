import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { OrderOnlineComponent } from './order-online/order-online.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SingupComponent } from './singup/singup.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SalesdashboardComponent } from './salesdashboard/salesdashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { ReservationdashboardComponent } from './reservationdashboard/reservationdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ChefaccountComponent } from './chefaccount/chefaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CartComponent,
    ReservationComponent,
    HomeComponent,
    OrderOnlineComponent,
    LoginComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SingupComponent,
    AboutUsComponent,
    SalesdashboardComponent,
    CustomerdashboardComponent,
    ReservationdashboardComponent,
    AdmindashboardComponent,
    AdminLandingComponent,
    CheckoutComponent,
    MyAccountComponent,
    OrderhistoryComponent,
    ItemdetailsComponent,
    KitchenComponent,
    ChefaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
