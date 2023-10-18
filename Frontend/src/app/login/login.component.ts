import { Component } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formValue: any = new FormData()

  constructor(
    private logInService: LoginServiceService,
    private router: Router,
    private toast: NgToastService) {

    this.toast = toast;
    this.router = router;
    sessionStorage.clear();
  }
  result: any;

  onSubmit(values: any) {

    this.formValue.append('Email', values.Email);
    this.formValue.append('Password', values.Password);


    this.logInService.login(this.formValue).subscribe(

      (data) => {
        
            this.toast.success({ detail: "SUCCESS", summary: 'Successfully Login', duration: 5000, position: 'topRight' });
            this.router.navigate(['/']);
         
      },

      (error) => {
        console.log(error)
        return this.toast.error({ detail: "ERROR", summary: 'Login Failed', duration: 5000, position: 'topRight', sticky: true });
      }
    );
  }

}