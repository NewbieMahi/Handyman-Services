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
  constructor(private allService: AllServiceService) {}
  
  ngOnInit(): void {
    this.allService.getWorkersByService('Carpentar').subscribe(users => {
      this.workerData = users;
      this.filteredWorkerData = users;

      console.log("Carpenatar fetched successfully",users);

    });
   
  }



applyFilter(): void {
    this.filteredWorkerData = this.workerData.filter((worker: any) =>
      worker.name.toLowerCase().includes(this.searchText.toLowerCase()) || 
       worker.price.toString().toLowerCase().includes(this.searchText.toLowerCase())
    );
  }


}
