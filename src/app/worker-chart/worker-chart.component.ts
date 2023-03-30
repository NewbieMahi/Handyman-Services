// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ChartType, ChartOptions } from 'chart.js';
// import { Label, SingleDataSet } from 'ng2-charts';

// @Component({
//   selector: 'app-worker-chart',
//   templateUrl: './worker-chart.component.html',
//   styleUrls: ['./worker-chart.component.css']
// })

// export class WorkerChartComponent implements OnInit {
 



// const counts: CountData = {};
//   public workers: any[];
//   public serviceData: SingleDataSet = [];
//   public serviceLabels: Label[] = [];
//   public serviceChartType: ChartType = 'pie';
//   public countData: SingleDataSet = [];
//   public countLabels: Label[] = [];
//   public countChartType: ChartType = 'line';
//   public countOptions: ChartOptions = {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: true
//         }
//       }]
//     }
//   };

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     this.http.get<any[]>('http://localhost:5000/api/allworkers').subscribe(data => {
//       this.workers = data;

//       // Process data for service chart
//       const services = {};
//       data.forEach(worker => {
//         if (worker.service in services) {
//           services[worker.service]++;
//         } else {
//           services[worker.service] = 1;
//         }
//       });
//       this.serviceData = Object.values(services);
//       this.serviceLabels = Object.keys(services);

//       // Process data for count chart
//       const counts = {};
//       data.forEach(worker => {
//         if (worker.service in counts) {
//           counts[worker.service]++;
//         } else {
//           counts[worker.service] = 1;
//         }
//       });
//       this.countData = Object.values(counts);
//       this.countLabels = Object.keys(counts);
//     });
//   }

// }


