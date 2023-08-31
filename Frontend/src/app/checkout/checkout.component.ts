import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent {
  showSuccessMessage=false;
  
  //simulate a successful checkout

  placeOrder(){
    
    //call your backend or perform necessary actions for placing the order

    // Once the order is successfully placed,set the flag to show the success message
    console.log(this)
    // this.showSuccessMessage=true;

  }

}
