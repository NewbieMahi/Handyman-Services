import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../all-service.service';

@Component({
  selector: 'app-painter',
  templateUrl: './painter.component.html',
  styleUrls: ['./painter.component.css']
})
export class PainterComponent implements OnInit {

  workerData: any;
  filteredWorkerData: any;
searchText: string = '';




  constructor(private allService: AllServiceService) {}
  
  ngOnInit(): void {
    this.allService.getWorkersByService('Painter').subscribe(users => {
      this.workerData = users;
      this.filteredWorkerData = users;
    });
   
  }
  applyFilter(): void {
    this.filteredWorkerData = this.workerData.filter((worker: any) =>
      worker.name.toLowerCase().includes(this.searchText.toLowerCase()) || 
       worker.price.toString().toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
