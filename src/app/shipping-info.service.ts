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

  sendOtpTo(mobileNumber:string){
    let data = "+91";
    data+=mobileNumber;
    console.log(data);
    const value = {
      mobileNumber:data,
      smsBody: "Dear User, Thank you for booking on-demand home services through our website! We have received your booking request and are excited to help you with your home service needs. If you need to make any changes to your booking or have any questions, please feel free to contact us. We look forward to providing you with an exceptional home service experience! Best regards, Mahesh Thorat."
    }
    return this.http.post('http://localhost:5000/api/sendOTP',value);
  }

  predictMaintance(mobileNumber:string, smsBody:string){
    let data = "+91";
    data+=mobileNumber;
    const value = {
      mobileNumber:data,
      smsBody:smsBody
    }
    return this.http.post('http://localhost:5000/api/sendOTP',value);
  }


}
