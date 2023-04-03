import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-recommendation',
  templateUrl: './review-recommendation.component.html',
  styleUrls: ['./review-recommendation.component.css']
})
export class ReviewRecommendationComponent implements OnInit {


    @Input() workerId: string | undefined;
    recommendations: any[] = [];
  
    constructor(private http: HttpClient) { }
  
    ngOnInit() {
      this.getRecommendations();
    }
  
    getRecommendations() {
      this.http.get<any[]>(`http://localhost:5000/api/recommendations/${this.workerId}`)
        .subscribe(recommendations => {
          this.recommendations = recommendations;
        });
    }

}
