import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {
  
  constructor(private http: HttpClient) {}

  getReviews() {
    // enter our reviews api 
    return this.http.get('http://localhost:5000/api/allworkers');
  }
}
