import { Component, OnInit } from '@angular/core';
import { WorkerChartService } from '../worker-chart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateWorkerForm: any;
  services: string[] = ['Cleaning', 'Plumbing', 'Electrical', 'Carpentry', 'AC Repair'];
  workerId: any ;
  currentUser: any;
  showSuccessMessage: boolean = false;
  errorMessage: string = '';
  // name: any;
  
  constructor(
    private fb: FormBuilder,
    private workerService: WorkerChartService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // let workerId :any;
    // workerId = this.route.snapshot.paramMap.get('id');
    // this.workerId1 = workerId;
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      // console.log("User fetched after in update form button",user);
      this.workerId = user.workerId;
      // this.name = user.username;

    });

 
    this.updateWorkerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      address: ['', Validators.required],
      price: ['', Validators.required],
      services: [[]],
    });
    

    this.workerService.getWorkerById(this.workerId).subscribe((worker: any) => {
      this.updateWorkerForm.patchValue(worker);
    });
  }

  onSubmit() {
    const updatedWorker = this.updateWorkerForm.value;
    this.workerService.updateWorkerById(this.workerId, updatedWorker).subscribe(() => {
      // console.log("Updation success");
      this.showSuccessMessage = true;
      this.updateWorkerForm.reset();
      this.router.navigate(['/update-success']);
    },error => {
      this.errorMessage = 'Error while updating the profile';
    });
  }
}

