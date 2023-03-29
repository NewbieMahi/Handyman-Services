import { forwardRef, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5000/api/auth/login';

  constructor(@Inject(forwardRef(() => HttpClient)) private http: HttpClient) { }
  
  login(email: string, password: string, userType:string): Observable<any> {
    const data = {
      email: email,
      password: password,
      userType: userType
    };
    

    return this.http.post(this.baseUrl, data);
  }

}
