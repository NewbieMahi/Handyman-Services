import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkerChartService } from '../worker-chart.service';
import { BloggingService } from '../blogging.service';
@Component({
  selector: 'app-single-plumber',
  templateUrl: './single-plumber.component.html',
  styleUrls: ['./single-plumber.component.css']
})
export class SinglePlumberComponent implements OnInit {
  plumber: any = {}; // object to store plumber data
  reviewText: string = ''; // variable to store user's review
  rating: number = 0; // variable to store user's rating

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
      },
      error => {
        console.log('Error while fetching worker details', error);
      }
    );
  
  }
  


}

