import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloggingService } from '../blogging.service';
@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {

  blog: any;

  constructor(
    private route: ActivatedRoute,
    private bloggingService: BloggingService
  ) { }

  ngOnInit(): void {
    let id :any;
    id = this.route.snapshot.paramMap.get('id');
    this.bloggingService.getBlogById(id).subscribe(
      response => {
        console.log(response);
        this.blog = response;
      },
      error => {
        console.log('Error while fetching blog details', error);
      }
    );
  }

}
