import { forwardRef, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  constructor(@Inject(forwardRef(() => HttpClient)) private http: HttpClient) { }

  getWorkersByService(service: string) {
    return this.http.get(`http://localhost:5000/workers?services=${service}`);
  }
  getWorkerById(id: string) {
    return this.http.get(`http://localhost:5000/workers/${id}`);
  }
  getLocation(lat: string, lon: string, service: string) {
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('service', service);
  
    return this.http.get('http://localhost:5000/api/nearbyworker', { params: params });
  }
  getWorkerByReview(service: string){
    const params = new HttpParams()
    .set('service',service);
    console.log(params);
    return this.http.get('http://localhost:5000/api/sentimentworkers', { params: params });
  }
 
}
