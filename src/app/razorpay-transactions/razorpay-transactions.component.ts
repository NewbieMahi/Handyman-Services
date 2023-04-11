import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-razorpay-transactions',
  templateUrl: './razorpay-transactions.component.html',
  styleUrls: ['./razorpay-transactions.component.css']
})
export class RazorpayTransactionsComponent implements OnInit {

  transactions: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions() {
    const apiUrl = 'https://api.razorpay.com/v1/payments';

    const authHeader = btoa('rzp_test_1KFuulfE9Tt0bY:OvzljmsSFhK61NSFRa9znm9E');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${authHeader}`
    };

    this.http.get(apiUrl, { headers }).subscribe(
      (response: any) => {
        console.log("response",response);
        this.transactions = response.items;
      },
      (error: any) => {
        console.error('Error fetching transactions:', error);
      }
    );
  }
}
