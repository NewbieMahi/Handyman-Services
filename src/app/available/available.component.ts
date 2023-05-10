import { Component, OnInit } from '@angular/core';
import { WorkerChartService } from '../worker-chart.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})
export class AvailableComponent implements OnInit {
  isAvailable: boolean = true;
  workerId!: string;
  currentUser: any;
  showSuccessMessage: boolean = false;
  errorMessage: string = '';

  constructor(
    private workerService: WorkerChartService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.workerId = user.workerId;
    });
  }

  updateAvailability() {
    const data = { is_available: this.isAvailable };
    this.workerService.updateWorkerAvailability(this.workerId, data).subscribe(() => {
      this.showSuccessMessage = true;
    }, error => {
      this.errorMessage = 'Error while updating availability';
    });
  }
}
