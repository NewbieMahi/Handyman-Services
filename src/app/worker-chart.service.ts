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
  updateWorkerById(id:string, data:any){
    return this.http.put(`http://localhost:5000/workers/${id}`,data);
  }
  updateWorkerAvailability(id:string, data:any){
   
    return this.http.put(`http://localhost:5000/availability/${id}`,data);
  }
  submitRating(workerId:string, rating:string){
    const data = {
      workerId:workerId,
      rating: rating
    }
    return this.http.post('http://localhost:5000/submit-rating',data);
  }
  submitReview(workerId:string, reviewText:string){
     const data = {
      workerId : workerId,
      reviewText : reviewText
     }
     return this.http.post('http://localhost:5000/add-review',data);
  }
  submitComplaint(workerId:string, reviewText:string){
    const data = {
     workerId : workerId,
     reviewText : reviewText
    }
    return this.http.post('http://localhost:5000/add-complaints',data);
 }
}

