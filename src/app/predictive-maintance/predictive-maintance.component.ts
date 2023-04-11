import { Component, OnInit } from '@angular/core';
import { ShippingInfoService } from '../shipping-info.service';
@Component({
  selector: 'app-predictive-maintance',
  templateUrl: './predictive-maintance.component.html',
  styleUrls: ['./predictive-maintance.component.css']
})
export class PredictiveMaintanceComponent implements OnInit {

  toEmail!: string;
  toPhone!: string;
  emailSubject!: string;
  emailBody!: string;
  smsBody!: string;

  smsSent: boolean = false;

  constructor(private shippingInfoService: ShippingInfoService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 

  // sendEmailNotification() {
  //   this.shippingInfoService.sendEmailNotification(this.toEmail, this.emailSubject, this.emailBody)
  //     .subscribe(response => console.log(response));
  // }

  sendSmsNotification() {
    this.shippingInfoService.predictMaintance(this.toPhone, this.smsBody)
      .subscribe(response => 
        {
          console.log(response);
          this.smsSent = true;

        }
      );
    this.toPhone = '';
    this.smsBody = '';
  }

}
