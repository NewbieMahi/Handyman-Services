import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  filteredBookings: any = [];
  isServiceCompleted = false;
  paymentStatus:any;
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

    this.workerService.myServices(this.currentUser.id).subscribe((data: any) => {
      this.bookings = data;
      this.filteredBookings = data;
      for (const booking of this.bookings) {
        this.workerService.getWorkerByworkerId(booking.workerId).subscribe(
          response => {
            booking.worker = response;
          },
          error => {
            console.log('Error while fetching worker details', error);
          }
        );
      }
    });
  }

  search() {
    this.filteredBookings = this.bookings.filter((booking: any) =>
      booking.worker.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  viewWorker(id: string) {
    this.router.navigate(['http://localhost:4200/service', id]);
  }

  completeService(bookingId: string) {
     this.workerService.updatePaymentStatus(bookingId).subscribe(response => {
      this.paymentStatus = 'successfull';
      this.isServiceCompleted = true;
    
    },
    (error) => {
      console.error(error);
    });
  }

}
