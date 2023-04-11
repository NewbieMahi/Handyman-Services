import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, forwardRef } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(@Inject(forwardRef(() => HttpClient)) private http: HttpClient) { }
  
  createPayment(amount:number, ): Observable<any> {
    const data = {
      amount:amount,
    };

    return this.http.post('http://localhost:5000/createOrder', data);
}
}
