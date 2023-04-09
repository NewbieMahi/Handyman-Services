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
  postBlog(title: string, author:string, image: string, description : string){
     const data = {
       title:title,
       author:author,
       image:image,
       description:description
     };
     return this.http.post('http://localhost:5000/api/blogs',data);
  }
}


