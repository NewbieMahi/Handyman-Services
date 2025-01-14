import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public currentUser = new BehaviorSubject<any>(null);

  private baseUrl = 'http://localhost:5000/api/auth/login';
  router: any;

  constructor(private http: HttpClient) { }
  
  login(email: string, password: string, userType:string): Observable<any> {
    const data = {
      email: email,
      password: password,
      userType: userType
    };

    return this.http.post(this.baseUrl, data)
      .pipe(
        tap(response => {
          console.log('Login Successful', response);
          this.currentUser.next(response); // set the currentUser in the AuthService
          
        })
      );
    
  }

}
