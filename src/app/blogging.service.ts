import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, forwardRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BloggingService {

  constructor(@Inject(forwardRef(() => HttpClient)) private http: HttpClient) { }
  
  getBlogs() {
    return this.http.get('http://localhost:5000/api/blogs');
  }
  postBlog(title: string, author:string, description : string){
     const data = {
       title:title,
       author:author,
       description:description
     };
     return this.http.post('http://localhost:5000/api/blogs',data);
  }
}


