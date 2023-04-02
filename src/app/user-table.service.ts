import { HttpClient } from '@angular/common/http';
import { Injectable, forwardRef, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTableService {
  constructor(@Inject(forwardRef(() => HttpClient)) private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:5000/api/allusers');
  }
}
