import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { WorkerChartService } from '../worker-chart.service';
@Component({
  selector: 'app-completed-service',
  templateUrl: './completed-service.component.html',
  styleUrls: ['./completed-service.component.css']
})
export class CompletedServiceComponent implements OnInit {

  currentUser: any;
  bookings: any = [];
  workers: any = [];
  filteredBookings: any = [];
  isServiceCompleted = true;
  searchValue: string = '';

  constructor(
    private authService: AuthService,
    private workerService: WorkerChartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      
    });

    this.workerService.completedService(this.currentUser.workerId).subscribe((data: any) => {
      this.bookings = data;
      this.filteredBookings = data;
      // for (const booking of this.bookings) {
      //   this.workerService.getWorkerByworkerId(booking.workerId).subscribe(
      //     response => {
      //       booking.worker = response;
      //     },
      //     error => {
      //       console.log('Error while fetching worker details', error);
      //     }
      //   );
      // }
    });
  }

  search() {
    this.filteredBookings = this.bookings.filter((booking: any) =>
      booking.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  

  completeService(bookingId: string) {
    
  }

}