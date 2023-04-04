import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ReviewServiceService } from '../review-service.service';

@Component({
  selector: 'app-review-recommendation',
  templateUrl: './review-recommendation.component.html',
  styleUrls: ['./review-recommendation.component.css']
})
export class ReviewRecommendationComponent implements OnInit {


  reviews: any[] | undefined;

  constructor(private reviewService: ReviewServiceService) {}

  ngOnInit() {
    
    this.reviewService.getReviews().subscribe((response: any) => {
      console.log(response);
      this.reviews = response;
      // Perform sentiment analysis on reviews
    },    
    (error: any) => console.error("Error while fetching ",error)
    );

  }

}


