import { Component, OnInit } from '@angular/core';
import { BloggingService } from '../blogging.service';
@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {
  blogs: any = [];
  constructor(private BloggingService: BloggingService) {}

   
  ngOnInit(): void {
    this.BloggingService.getBlogs()
    .subscribe(
      response =>{
        console.log(response); 
        this.blogs = response;  
      },
      error => {
        console.log("error while fetching blog", error);
      }
     );
  }

}
