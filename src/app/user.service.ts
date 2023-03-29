import { forwardRef, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:5000/api/user/register';

  constructor(@Inject(forwardRef(() => HttpClient)) private http: HttpClient) { }

  register(name: string, email: string, mobileNumber: string, password: string, confirmPassword: string): Observable<any> {
    const data = {
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      password: password,
      confirmPassword: confirmPassword
    };

    return this.http.post(this.baseUrl, data);
  }
}
