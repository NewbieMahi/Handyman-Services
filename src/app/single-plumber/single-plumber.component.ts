import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-plumber',
  templateUrl: './single-plumber.component.html',
  styleUrls: ['./single-plumber.component.css']
})
export class SinglePlumberComponent implements OnInit {
  plumber: any = {}; // object to store plumber data
  reviewText: string = ''; // variable to store user's review
  rating: number = 0; // variable to store user's rating

  constructor() {
    this.plumber.name = 'John Smith';
    this.plumber.price = '100₹ /Hr';
    this.plumber.availability = 'Available';
    this.plumber.address = 'Karad';
    this.plumber.phone = '908080808';
  }

  submitReview() {
    // store user's review and rating in plumber object
    this.plumber.review = this.reviewText;
    this.plumber.rating = this.rating;
    // clear the input fields
    this.reviewText = '';
    this.rating = 0;
  }
  

 
  ngOnInit(): void {
    
  
  
  }
  


}
