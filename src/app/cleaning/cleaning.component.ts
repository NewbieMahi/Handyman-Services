import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../all-service.service';

@Component({
  selector: 'app-cleaning',
  templateUrl: './cleaning.component.html',
  styleUrls: ['./cleaning.component.css']
})
export class CleaningComponent implements OnInit {

  workerData: any;
  filteredWorkerData: any;
  searchText: string = '';
  sortBy: string = 'rating';

  constructor(private allService: AllServiceService) {}

  ngOnInit(): void {
    this.allService.getWorkersByService('Cleaner').subscribe(users => {
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
  
  lat: any;
  lon: any;
  getNearByWorker(){
    navigator.geolocation.getCurrentPosition((position) => {
        console.log("Latitude: " + position.coords.latitude +
                    "Longitude: " + position.coords.longitude);
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;

       });  
     this.allService.getLocation(this.lat,this.lon,"Cleaner").subscribe(users => {
      this.workerData = users;
      this.filteredWorkerData = users;
      console.log("nearby all worker", this.workerData);
    });
  }
  getWorkerByReview(){
    this.allService.getWorkerByReview('Cleaner').subscribe(users => {
      this.workerData = users;
      this.filteredWorkerData = users;
      console.log("sentiment analysis sorted all worker", this.workerData);
    });
}
  applySort() {
    if (this.sortBy === 'rating') {
      this.filteredWorkerData.sort((a: any, b: any) => b.averageRating - a.averageRating);
    } else if (this.sortBy === 'review') {
       this.getWorkerByReview();
    } else if (this.sortBy === 'distance') {
        this.getNearByWorker();
    }
  }

}
