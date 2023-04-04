import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../all-service.service';

@Component({
  selector: 'app-painter',
  templateUrl: './painter.component.html',
  styleUrls: ['./painter.component.css']
})
export class PainterComponent implements OnInit {

  workerData: any;
  constructor(private allService: AllServiceService) {}
  
  ngOnInit(): void {
    this.allService.getWorkersByService('Painter').subscribe(users => {
      this.workerData = users;
    });
   
  }

}
