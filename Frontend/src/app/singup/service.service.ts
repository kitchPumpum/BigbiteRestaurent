import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'https://localhost:7093/api';

  constructor(private http: HttpClient) { }

  registerUser(formValue: any) {
    return this.http.post(`${this.apiUrl}/signup`, formValue);
  }
  
}
