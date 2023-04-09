import { Component, OnInit } from '@angular/core';
import { BloggingService } from '../blogging.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {
  blogs: any = [];
  loggedIn: boolean = false;

  constructor(
    private BloggingService: BloggingService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Subscribe to the currentUser behavior subject in the AuthService
    this.authService.currentUser.subscribe(user => {
      // Set the value of the loggedIn variable based on whether the user is logged in or not
      this.loggedIn = !!user;
    });

    this.BloggingService.getBlogs().subscribe(
      response => {
        console.log(response);
        this.blogs = response;
      },
      error => {
        console.log("error while fetching blog", error);
      }
    );
  }
}
