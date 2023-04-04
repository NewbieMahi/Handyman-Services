import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../all-service.service';

@Component({
  selector: 'app-electician',
  templateUrl: './electician.component.html',
  styleUrls: ['./electician.component.css']
})
export class ElecticianComponent implements OnInit {

  workerData: any;
  constructor(private allService: AllServiceService) {}
  
  ngOnInit(): void {
    this.allService.getWorkersByService('Electrician').subscribe(users => {
      this.workerData = users;
    });
   
  }

}
