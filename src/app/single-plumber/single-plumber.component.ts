import { Component, OnInit } from '@angular/core';
declare var Razorpay: any;
@Component({
  selector: 'app-single-plumber',
  templateUrl: './single-plumber.component.html',
  styleUrls: ['./single-plumber.component.css']
})
export class SinglePlumberComponent implements OnInit {
  setupRazorpay() {
    const options = {
      "key": "rzp_test_nfj6eLa0dG0UO0",
      "amount": "10000",
      "currency": "INR",
      "name": "Handyman Services Karad",
      "description": "Pay & Book your worker",
      "image": "https://tse4.mm.bing.net/th?id=OIP.hNDFGMar6YOB3lfEGPsOXAHaHa&pid=Api&P=0",
      "order_id": "order_LT5hRLXWZz2CL9",
      "handler": (response:any) => {
        console.log(response);
        alert("This step of Payment Succeeded");
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
      alert("This step of Payment Failed");
    });
  
    document.getElementById('pay-button')!.onclick = (e) => {
      razorpayObject.open();
      e.preventDefault();
    }
  
}
  

  constructor() { }

  ngOnInit(): void {
    
  const script = document.createElement('script');
  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  script.async = true;
  script.onload = () => this.setupRazorpay();
  document.body.appendChild(script);
  
  }
  


}
