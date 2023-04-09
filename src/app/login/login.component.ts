import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router'; // Import the Router service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false; // initialize isLoggedIn to false
  currentUserEmail = ''; 
  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ]),
    userType: new FormControl('',[Validators.required ])
  });
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); } 
 
  constructor(
    @Inject(forwardRef(() => AuthService)) private AuthService: AuthService,
    private router: Router // Inject the Router service
  ) { 
  }

  loginHandyman() {    
    const formData = this.signin.value;
    
    this.AuthService.login(formData.email,formData.password, formData.userType)
    .pipe(
      tap(response => {
        console.log('Login Successful', response);
        this.AuthService.currentUser.next(response); // set the currentUser in the AuthService
        let userType = response.userType;
        this.isLoggedIn = true; // set isLoggedIn to true
        this.currentUserEmail = response.email;
        console.log(this.currentUserEmail);
        if (userType === 'admin') {
          this.router.navigate(['/admin-view']);
        } else {
          this.router.navigate(['/']);
        }
        
      })
    )
    .subscribe(
      response => {
        // console.log('Login Successful', response)
      },
      error => console.error('Error while logging in:', error)
    ); 
  }

  ngOnInit(): void {
  }
}
