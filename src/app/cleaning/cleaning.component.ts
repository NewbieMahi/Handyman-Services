import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../all-service.service';

@Component({
  selector: 'app-cleaning',
  templateUrl: './cleaning.component.html',
  styleUrls: ['./cleaning.component.css']
})
export class CleaningComponent implements OnInit {

  workerData: any;
  constructor(private allService: AllServiceService) {}
  
  ngOnInit(): void {
    this.allService.getWorkersByService('Cleaner').subscribe(users => {
      this.workerData = users;
    });
   
  }

}
