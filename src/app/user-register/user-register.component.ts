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
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); }
  constructor(@Inject(forwardRef(() => UserService)) private userService: UserService) { }

  registerUser() {
    const userData = {
       name:this.name,
       email:this.email,
       mobileNumber:this.mobileNumber,
       password:this.password,
       confirmPassword:this.confirmPassword

    }
    
    this.userService.register(this.name, this.email, this.mobileNumber, this.password, this.confirmPassword)
      .subscribe(
        response => console.log('User registration successful:', response),
        error => console.error('Error registering user:', error)
      );
  }

  ngOnInit(): void {
  }

}
