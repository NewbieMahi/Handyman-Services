import { Component, OnInit } from '@angular/core';
import { AllServiceService } from "../all-service.service";
@Component({
  selector: 'app-carpentar',
  templateUrl: './carpentar.component.html',
  styleUrls: ['./carpentar.component.css']
})
export class CarpentarComponent implements OnInit {
  workerData: any;
  constructor(private allService: AllServiceService) {}
  
  ngOnInit(): void {
    this.allService.getWorkersByService('Carpentar').subscribe(users => {
      this.workerData = users;

      console.log("Carpenatar fetched successfully",users);

    });
   
  }


}
