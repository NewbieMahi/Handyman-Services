import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, forwardRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BloggingService } from '../blogging.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl(''),      
    });
 
 

  constructor(@Inject(forwardRef(() => BloggingService)) private BloggingService: BloggingService) { }
  submitted = false;
  onSubmit() {
    const formData = this.blogForm.value;
    this.BloggingService.postBlog(formData.title, formData.author, formData.description)
    .subscribe(
      response =>{
        console.log("Blog saved successfully");
        this.blogForm.reset();
        this.submitted = true;
        
      },
      error => {
        console.log("error while creating blog", error);
      }
     );
  }


  ngOnInit(): void {
   throw new Error('Method not implemented.');
  }

}
