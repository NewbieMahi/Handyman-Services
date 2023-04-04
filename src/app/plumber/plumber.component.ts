import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../all-service.service';

@Component({
  selector: 'app-plumber',
  templateUrl: './plumber.component.html',
  styleUrls: ['./plumber.component.css']
})
export class PlumberComponent implements OnInit {

  workerData: any;
  constructor(private allService: AllServiceService) {}
  
  ngOnInit(): void {
    this.allService.getWorkersByService('Plumber').subscribe(users => {
      this.workerData = users;
    });
   
  }

}
