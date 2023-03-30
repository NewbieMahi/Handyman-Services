import { forwardRef, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  constructor(@Inject(forwardRef(() => HttpClient)) private http: HttpClient) { }

  getWorkersByService(service: string) {
    return this.http.get(`http://localhost:5000/workers?services=${service}`);
  }
}
