// import { Component, forwardRef, Inject, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { WorkerChartService } from '../worker-chart.service';
// import { response } from 'express';
// import Chart from 'chart.js/auto';

// @Component({
//   selector: 'app-worker-chart',
//   templateUrl: './worker-chart.component.html',
//   styleUrls: ['./worker-chart.component.css']
// })
// export class WorkerChartComponent implements OnInit {

//   pieChart: any;
//   lineChart: any;

//   constructor(@Inject(forwardRef(() => WorkerChartService)) private WorkerChartService: WorkerChartService) { 
// }


//   workerChart(){
//     this.WorkerChartService.getWorkers().subscribe(
//     (response: any) => {
//         console.log('Worker fetched successfull', response);
//         const servicesData = response.map((worker: { services: any; }) => worker.services);
//         // Group data by service
//       const servicesCount = servicesData.reduce((counts: { [x: string]: number; }, service: string | number) => {
//         counts[service] = counts[service] ? counts[service] + 1 : 1;
//         return counts;
//       }, {});

//       // Create pie chart
//       const pieChartData = Object.values(servicesCount);
//       const pieChartLabels = Object.keys(servicesCount);
//       this.pieChart = new Chart('pieChart', {
//         type: 'pie',
//         data: {
//           labels: pieChartLabels,
//           datasets: [{
//             data: pieChartData,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.5)',
//               'rgba(54, 162, 235, 0.5)',
//               'rgba(255, 206, 86, 0.5)',
//               'rgba(75, 192, 192, 0.5)',
//               'rgba(153, 102, 255, 0.5)',
//               'rgba(255, 159, 64, 0.5)'
//             ]
//           }]
//         }
//       });

//       // Create line chart
     
//     },
//     (error: any) => console.error('Error while fetchng workers from database', error)
//     );
//   }

//   ngOnInit() {
//   }

// }
import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WorkerChartService } from '../worker-chart.service';
import { response } from 'express';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-worker-chart',
  templateUrl: './worker-chart.component.html',
  styleUrls: ['./worker-chart.component.css']
})
export class WorkerChartComponent implements OnInit {

  pieChart: any;
  barChart: any;

  constructor(@Inject(forwardRef(() => WorkerChartService)) private WorkerChartService: WorkerChartService) { 
}

  workerChart(){
    this.WorkerChartService.getWorkers().subscribe(
    (response: any) => {
        console.log('Worker fetched successfull', response);
        const servicesData = response.map((worker: { services: any; }) => worker.services);
        // Group data by service
      const servicesCount = servicesData.reduce((counts: { [x: string]: number; }, service: string | number) => {
        counts[service] = counts[service] ? counts[service] + 1 : 1;
        return counts;
      }, {});

      // Create pie chart
      const pieChartData = Object.values(servicesCount);
      const pieChartLabels = Object.keys(servicesCount);
      this.pieChart = new Chart('pieChart', {
        type: 'pie',
        data: {
          labels: pieChartLabels,
          datasets: [{
            data: pieChartData,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)'
            ]
          }]
        }
      });

      // Create bar chart
      const barChartData = Object.values(servicesCount);
      const barChartLabels = Object.keys(servicesCount);
      this.barChart = new Chart('barChart', {
        type: 'bar',
        data: {
            labels: barChartLabels,
            datasets: [{
              data: barChartData,
              label: 'Number of Workers',
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
              ]
            }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value, index, values) {
                  return value.toString();
                }
              }
            }
          }
        }
      });
    },
    (error: any) => console.error('Error while fetchng workers from database', error)
    );
  }

  ngOnInit() {
  }

}
