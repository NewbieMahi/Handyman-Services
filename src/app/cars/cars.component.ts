import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../all-service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  workerData: any;
  constructor(private allService: AllServiceService) {}
  
  ngOnInit(): void {
    this.allService.getWorkersByService('Carpentar').subscribe(users => {
      this.workerData = users;
    });
   
  }

}
