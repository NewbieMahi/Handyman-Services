import { forwardRef, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingInfoService {

  private baseUrl = 'http://localhost:5000/api/order';

  constructor(@Inject(forwardRef(() => HttpClient)) private http: HttpClient) { }
  
  createOrder(name: string,  mobileNumber: string, address: string, pinCode: string): Observable<any> {
    const data = {
      name: name,
      mobileNumber: mobileNumber,
      address: address,
      pinCode: pinCode
    };
    

    return this.http.post(this.baseUrl, data);
  }
}
