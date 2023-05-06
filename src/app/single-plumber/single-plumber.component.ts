import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkerChartService } from '../worker-chart.service';
@Component({
  selector: 'app-single-plumber',
  templateUrl: './single-plumber.component.html',
  styleUrls: ['./single-plumber.component.css']
})
export class SinglePlumberComponent implements OnInit {
  plumber: any = {}; // object to store plumber data
  reviewText: string = ''; // variable to store user's review
  complaintText : string = '';
  rating: any ; // variable to store user's rating
  showComplaintForm = false;

  constructor(
    private route: ActivatedRoute,
    private workerService: WorkerChartService
  ) { }

 
  

 
  ngOnInit(): void {
    
    let id :any;
    id = this.route.snapshot.paramMap.get('id');
    this.workerService.getWorkerById(id).subscribe(
      response => {
        console.log(response);
        this.plumber = response;
        console.log("plumber info", this.plumber);
      },
      error => {
        console.log('Error while fetching worker details', error);
      }
    );
  
  }

  submitRating() {
    const workerId = this.plumber.workerId;
  const rating = (document.getElementById('rating') as HTMLSelectElement).value;
  
  this.workerService.submitRating(workerId, rating).subscribe((data: any) => {
    this.plumber.averageRating = data.averageRating;
    // alert(data.message);
  });
  }
  
  submitReview() {
    const workerId = this.plumber.workerId;
    const reviewText = this.reviewText;
    this.workerService.submitReview(workerId, reviewText).subscribe((response: any) => {
      this.plumber.review.push(reviewText);
      this.reviewText = '';
    });
}


submitComplaint() {
  const workerId = this.plumber.workerId;
  const reviewText = this.complaintText;
  this.workerService.submitComplaint(workerId, reviewText).subscribe((response: any) => {
    this.plumber.complaints.push(reviewText);
    this.complaintText = '';
  });
}

}

