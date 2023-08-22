import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderOnlineComponent } from './order-online/order-online.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  
    {  path: 'order-online', component: OrderOnlineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
