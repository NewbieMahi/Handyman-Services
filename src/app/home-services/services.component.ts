import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { AllServiceService } from '../all-service.service';



@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  workers: any[] = [];

  constructor(private allService: AllServiceService) { }

  ngOnInit(): void {
  }

  getAllService(service: string) {
    console.log(service);
    this.allService.getWorkersByService(service).subscribe((response:any)=> console.log(response),
    (error: any) => console.error('Error while login into system:', error)
    );
   
  }
  


}
