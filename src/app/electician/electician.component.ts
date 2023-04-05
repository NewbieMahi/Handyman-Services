import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../all-service.service';

@Component({
  selector: 'app-electician',
  templateUrl: './electician.component.html',
  styleUrls: ['./electician.component.css']
})
export class ElecticianComponent implements OnInit {

  workerData: any;
  filteredWorkerData: any;
  searchText: string = '';
  
  constructor(private allService: AllServiceService) {}
  
  ngOnInit(): void {
    this.allService.getWorkersByService('Electrician').subscribe(users => {
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
