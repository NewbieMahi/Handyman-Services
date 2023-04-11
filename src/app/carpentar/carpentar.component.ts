import { Component, OnInit } from '@angular/core';
import { AllServiceService } from "../all-service.service";
@Component({
  selector: 'app-carpentar',
  templateUrl: './carpentar.component.html',
  styleUrls: ['./carpentar.component.css']
})
export class CarpentarComponent implements OnInit {
  workerData: any;
  filteredWorkerData: any;
  searchText: string = '';
  sortBy: string = 'rating';

  constructor(private allService: AllServiceService) {}

  ngOnInit(): void {
    this.allService.getWorkersByService('Carpentar').subscribe(users => {
      this.workerData = users;
      this.filteredWorkerData = users;
      this.applySort();
    });
  }

  applyFilter(): void {
   
    this.filteredWorkerData = this.workerData.filter((worker: any) =>
      worker.name.toLowerCase().includes(this.searchText.toLowerCase()) || 
       worker.price.toString().toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.applySort();
  }

  applySort() {
    if (this.sortBy === 'rating') {
      this.filteredWorkerData.sort((a: any, b: any) => b.averageRating - a.averageRating);
    } else if (this.sortBy === 'review') {
      // You can implement sorting by review here
      console.log('Sorting by review is not implemented yet.');
    } else if (this.sortBy === 'distance') {
      // You can implement sorting by distance here
      console.log('Sorting by distance is not implemented yet.');
    }
  }
}
