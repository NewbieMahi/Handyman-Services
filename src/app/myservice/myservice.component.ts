import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { WorkerChartService } from '../worker-chart.service';
@Component({
  selector: 'app-myservice',
  templateUrl: './myservice.component.html',
  styleUrls: ['./myservice.component.css']
})
export class MyserviceComponent implements OnInit {
  
  currentUser: any;
  bookings: any = [];
  workers: any = [];

  constructor(private authService: AuthService,
  private workerService: WorkerChartService,  
  ) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });

    this.workerService.myServices(this.currentUser.id).subscribe((data: any) => {
        this.bookings = data;
        for (const booking of this.bookings) {
          this.workerService.getWorkerByworkerId(booking.workerId).subscribe(
            response => {
              console.log("res ", response);
            },
            error => {
              console.log('Error while fetching worker details', error);
            }
          );
        }
  
    });
 
    

  
  }

}
