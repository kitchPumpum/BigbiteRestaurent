import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup'; 

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private apiUrl = 'https://localhost:7093/api';

  constructor(private http: HttpClient, private toast: NgToastService) { }

  login(formValue: any) {
    return this.http.post(`${this.apiUrl}/login`, formValue);
  }
  
  Getall(){
    return this.http.get(this.apiUrl);
  }
 
  isloggedin(){
    return sessionStorage.getItem('firstName')!=null;
  }
}