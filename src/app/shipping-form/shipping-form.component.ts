import { Component, forwardRef, Inject } from '@angular/core';
import { ShippingInfoService } from '../shipping-info.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent {
  name: string ='';
  mobileNumber: string ='';
  address: string ='';
  pincode: string ='';


  matcher = new MyErrorStateMatcher();
  signin: FormGroup = new FormGroup({
   name: new FormControl(''),
   mobileNumber: new FormControl(''),
   address: new FormControl(''),
   pinCode: new FormControl('')

 });
  constructor(@Inject(forwardRef(() => ShippingInfoService)) private ShippingInfoService: ShippingInfoService) { }

  saveOrder(){

  const formData = this.signin.value;
  this.ShippingInfoService.createOrder(formData.name, formData.mobileNumber, formData.address, formData.pinCode)
    .subscribe(
      response => {
        console.log('Order Saved Successfully:', response);
      },
      error => {
        console.error('Error while saving order:', error);
      }
    );
    
    }

    ngOnInit(): void {
    }
}
