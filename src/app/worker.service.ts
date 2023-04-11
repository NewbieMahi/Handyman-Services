import { forwardRef, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
 
 
  private baseUrl = 'http://localhost:5000/api/worker/register';

  constructor(@Inject(forwardRef(() => HttpClient)) private http: HttpClient) { }
  
  register(name: string,workerId:string, email: string, mobileNumber: string, password: string, confirmPassword: string, address:string, price:number, services: [string] ): Observable<any> {
    const data = {
      name: name,
     workerId: workerId,
    email: email,
    mobileNumber: mobileNumber,
    password: password,
    confirmPassword: confirmPassword,
    address: address,
    price: price,
    services: services
    };

    return this.http.post(this.baseUrl, data);
}
  getWorkerByEmail(email:string){
    return this.http.get(`http://localhost:5000/workers/${email}`);
  }

  updateWorker(updatedWorker:any){

  }
}
