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
  services: string[] = ['Plumber', 'Electrician', 'Carpentar','Cleaner','Painter','Mechanic'];
emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
 signin: FormGroup = new FormGroup({
  name: new FormControl(''),
  workerId: new FormControl(''),
  email: new FormControl(''),
  mobileNumber: new FormControl(''),
  password: new FormControl(''),
  confirmPassword: new FormControl(''),
  address: new FormControl(''),
  price: new FormControl(''),
  services: new FormControl(''),
    
  });
  hide = true;
  
  registrationSuccessful = false;
  registrationErrorMessage = '';
  isRegistering = false;
  submitted = true;
  snackBar: any;



  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); }
  matcher = new MyErrorStateMatcher();
  constructor(@Inject(forwardRef(() => WorkerService)) private userService: WorkerService) { }

  registerWorker() {
    
    const formData = this.signin.value;
    
    this.userService.register(formData.name,formData.workerId, formData.email, formData.mobileNumber, formData.password, formData.confirmPassword, formData.address, formData.price, formData.services)
    .subscribe(
      response =>{
         console.log('Worker registration successful:', response);
         this.registrationSuccessful = true;
         this.registrationErrorMessage = '';
         this.signin.reset();
         this.submitted = false;
         this.snackBar.open('User registered successfully', 'Close', {
           duration: 3000
         });
         // Reset validation errors and set form to initial state
         this.signin.markAsPristine();
         this.signin.markAsUntouched();
         Object.keys(this.signin.controls).forEach(key => {
           this.signin.controls[key].updateValueAndValidity();
         });
      },
      error =>{
        console.error('Error registering worker:', error);
        this.registrationErrorMessage = error.message || 'An unknown error occurred';
      } 
    );
    
  }

  ngOnInit(): void {
  }

}
