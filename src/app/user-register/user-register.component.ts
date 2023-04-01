import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserService } from '../user.service';

import { forwardRef } from '@angular/core';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
name:string='';
email:string='';
mobileNumber:string='';
password:string='';
confirmPassword:string='';


emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
   signin: FormGroup = new FormGroup({
    // name: new FormControl('',[Validators.required ]),
    // email: new FormControl('', [Validators.email, Validators.required ]),
    // mobileNumber: new FormControl('',[Validators.required ]),
    // password: new FormControl('', [Validators.required, Validators.min(3) ]),
    // confirmPassword: new FormControl('',[Validators.required ])
    name: new FormControl(''),
    email: new FormControl(''),
    mobileNumber: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')

  });
  hide = true;
  
  isRegistrationSuccessful = false;
  registrationErrorMessage = '';
  isRegistering = false;
  submitted = true;
  snackBar: any;


  // get emailInput() { return this.signin.get('email'); }
  // get passwordInput() { return this.signin.get('password'); }
  constructor(@Inject(forwardRef(() => UserService)) private userService: UserService) { }

  registerUser() {
    
    // const formData = this.signin.value;
    // this.userService.register(formData.name, formData.email, formData.mobileNumber, formData.password, formData.confirmPassword)
    // .subscribe(
    //   response => { 
        
    //     console.log('User registration successful:', response);
    //     this.isRegistrationSuccessful = true; // set the flag to true
    //     this.registrationErrorMessage = ''; // reset the error message
    //     this.signin.reset(); // reset the form
    //     this.submitted = false;
    //     this.snackBar.open('User registered successfully', 'Close', {
    //       duration: 3000
    //     });
    
    //    },
    //   error => {
    //     console.error('Error registering user:', error);
    //     this.registrationErrorMessage = error.message;
    //     this.snackBar.open('Error registering user', 'Close', {
    //       duration: 3000
    //     }); 
    //   }
    // );
    const formData = this.signin.value;
  this.userService.register(formData.name, formData.email, formData.mobileNumber, formData.password, formData.confirmPassword)
    .subscribe(
      response => {
        console.log('User registration successful:', response);
        this.isRegistrationSuccessful = true;
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
      error => {
        console.error('Error registering user:', error);
        this.registrationErrorMessage = error.message || 'An unknown error occurred';
      }
    );
    
  }

  ngOnInit(): void {
  }

}
