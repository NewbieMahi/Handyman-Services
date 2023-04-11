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
  getWorkerById(id:string){
    return this.http.get(`http://localhost:5000/workers/${id}`);
  }
  submitRating(workerId:string, rating:string){
    const data = {
      workerId:workerId,
      rating: rating
    }
    return this.http.post('http://localhost:5000/submit-rating',data);
  }
}

