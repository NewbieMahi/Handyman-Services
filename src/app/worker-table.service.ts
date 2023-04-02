import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, forwardRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkerTableService {

  constructor(@Inject(forwardRef(() => HttpClient)) private http: HttpClient) { }

  getWorkers() {
    return this.http.get('http://localhost:5000/api/allworkers');
  }
}
