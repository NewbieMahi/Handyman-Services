import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ]),
    userType: new FormControl('',[Validators.required ])
  });
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); } 
 
  constructor(@Inject(forwardRef(() => AuthService)) private AuthService: AuthService) { 
  }

  loginHandyman() {
    
    const formData = this.signin.value;
    
    
    this.AuthService.login(formData.email,formData.password, formData.userType)
    .pipe(
      tap(response => {
        console.log('Login Successful', response);
        this.AuthService.currentUser.next(response); // set the currentUser in the AuthService
      })
    )
    .subscribe(
      (      response: any) => console.log('Login Successfull', response),
      (      error: any) => console.error('Error while login into system:', error)
    );
    
  }

  ngOnInit(): void {
  }

}
