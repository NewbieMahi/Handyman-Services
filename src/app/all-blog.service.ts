import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, forwardRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllBlogService {
    
  constructor(@Inject(forwardRef(() => HttpClient)) private http: HttpClient) { }

  getBlogs() {
    return this.http.get('http://localhost:5000/api/allblogs');
  }
}
