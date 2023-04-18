import { Component, forwardRef, Inject } from '@angular/core';
import { ShippingInfoService } from '../shipping-info.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { PaymentService } from '../payment.service';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
declare var Razorpay: any;

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
  orderId: any;
  name: string ='';
  mobileNumber: string ='';
  address: string ='';
  pincode: string ='';

  isBooked = false; 


  matcher = new MyErrorStateMatcher();
  signin: FormGroup = new FormGroup({
   name: new FormControl(''),
   mobileNumber: new FormControl(''),
   address: new FormControl(''),
   pinCode: new FormControl('')

 });
 
  constructor(@Inject(forwardRef(() => ShippingInfoService)) private ShippingInfoService: ShippingInfoService,
  private paymentService: PaymentService,
  private router: Router 
  ) { }

  shareOnFacebook() {
    let url = "https://www.facebook.com/sharer/sharer.php?u=http://www.handyman-service-karad.com&picture=https://tse3.mm.bing.net/th?id=OIP.Pw63yqOBb_1sWaz2eOK5HQHaEK&pid=Api&P=0&hashtag=handyman";
    window.open(url, "_blank");
  }

  

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
   this.paymentService.createPayment(10000)
   .subscribe(
    response => {
      console.log('data fetched by order creation', response);
      this.orderId = response.id;
      console.log("Order id", this.orderId);
    },
    error => {
      console.error('Error while creating order:', error);
    }
  );
    
    }

    sendOTP(){
      const formData = this.signin.value;
      this.ShippingInfoService.sendOtpTo(formData.mobileNumber)
      .subscribe(
        response => {
          console.log('otp sended success', response);
        },
        error => {
          console.error('Error while sending otp:', error);
        }
      );
    }

    setupRazorpay() {
      const options = {
        "key": "rzp_test_1KFuulfE9Tt0bY",
        "amount": "10000",
        "currency": "INR",
        "name": "Handyman Service",
        "description": "Pay & Book your worker",
        "image": "https://tse4.mm.bing.net/th?id=OIP.hNDFGMar6YOB3lfEGPsOXAHaHa&pid=Api&P=0",
        "order_id": this.orderId,
        "handler": (response:any) => {
          this.isBooked = true;
          
          // alert("This step of Payment Succeeded! Book more service here.");
          this.sendOTP();
          this.router.navigate(['/payment-success']);
          // window.location.reload();
          this.shareOnFacebook();
          // this.router.navigate(['/service-component']);
          // this.router.navigate(['service-component']);

        },
        "prefill": {
          "contact": "9359614993",
          "name": "Mahesh Thorat",
          "email": "mahithorat249@gmail.com"
        },
        "notes": {
          "description": "Book your handyman using secure payment",
        },
        "theme": {
          "color": "#2300a3"
        }
      };
    
      const razorpayObject = new Razorpay(options);
      console.log(razorpayObject);
    
      razorpayObject.on('payment.failed', (response:any) => {
        console.log(response);
        alert("This step of Payment Failed. Please include valid credential");
      });
    
      document.getElementById('pay-button')!.onclick = (e) => {
        razorpayObject.open();
        e.preventDefault();
      }
    }
    ngOnInit(): void {


    
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => this.setupRazorpay();
      document.body.appendChild(script);
      
      }
       
    
    }

