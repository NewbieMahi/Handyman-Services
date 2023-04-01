import { forwardRef, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerChartService {
  constructor(@Inject(forwardRef(() => HttpClient)) private http: HttpClient) { }

  getWorkers() {
    return this.http.get('http://localhost:5000/api/allworkers');
  }
}

