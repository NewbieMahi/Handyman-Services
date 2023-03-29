import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';
import { WorkerService } from '../worker.service';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-worker-register',
  templateUrl: './worker-register.component.html',
  styleUrls: ['./worker-register.component.css']
})
export class WorkerRegisterComponent implements OnInit {
  services: string[] = ['Plumber', 'Electrician', 'Carpentar','Cleaner','Painter','Car & Bike Repair'];
emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
 signin: FormGroup = new FormGroup({
  name: new FormControl('',[Validators.required ]),
  workerId: new FormControl('',[Validators.required ]),
  email: new FormControl('', [Validators.email, Validators.required ]),
  mobileNumber: new FormControl('',[Validators.required ]),
  password: new FormControl('', [Validators.required, Validators.min(3) ]),
  confirmPassword: new FormControl('',[Validators.required ]),
  address: new FormControl('',[Validators.required ]),
  price: new FormControl('',[Validators.required ]),
  services: new FormControl('',[Validators.required ]),
    
  });
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); }
  matcher = new MyErrorStateMatcher();
  constructor(@Inject(forwardRef(() => WorkerService)) private userService: WorkerService) { }

  registerWorker() {
    
    const formData = this.signin.value;
    
    this.userService.register(formData.name,formData.workerId, formData.email, formData.mobileNumber, formData.password, formData.confirmPassword, formData.address, formData.price, formData.services)
    .subscribe(
      response => console.log('Worker registration successful:', response),
      error => console.error('Error registering user:', error)
    );
    
  }

  ngOnInit(): void {
  }

}
