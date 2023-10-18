import { Component} from '@angular/core';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup'; 

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  formValue: any = new FormData() 

  constructor(
    private signupService: ServiceService, 
    private router: Router, 
    private toast: NgToastService) { 
        this.toast = toast;
        this.router=router;
    }

  onSubmit(values: any) {


        this.formValue.append('FirstName', values.FirstName);
        this.formValue.append('LastName', values.LastName);
        this.formValue.append('Phone', values.Phone);
        this.formValue.append('Email', values.Email);
        this.formValue.append('Password', values.Password);
        this.formValue.append('street', values.street);
        this.formValue.append('city', values.city);
        this.formValue.append('zip', values.zip);
        this.formValue.append('state', values.state);

      this.signupService.registerUser(this.formValue).subscribe(
        (response) => {
          this.toast.success({detail:"SUCCESS", summary:'Successfully SignIn', duration: 5000, position:'topRight'});
          return this.router.navigate(['/login']);
        },
        (error) => {
          console.log({error});
          return this.toast.error({detail:"ERROR", summary:'SignIn Failed', duration: 5000,position:'topRight', sticky:true});
        });
    
  }

}