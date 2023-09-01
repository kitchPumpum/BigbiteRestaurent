import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-online',
  templateUrl: './order-online.component.html',
  styleUrls: ['./order-online.component.css']
})
export class OrderOnlineComponent {
  constructor(private router: Router) {}

  redirectToLink(): void {
       this.router.navigate(['itemdetails']);
  }

}
