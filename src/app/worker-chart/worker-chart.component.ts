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

  showCharts = false;

  pieChart: any;
  barChart: any;
  doughnutChart: Chart<"doughnut", unknown[], string> | undefined;

  constructor(@Inject(forwardRef(() => WorkerChartService)) private WorkerChartService: WorkerChartService) { 
}

  // workerChart(){
   
  // }

  ngOnInit() {
    this.showCharts = true;
   
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
              'rgba(0, 128, 128, 1)',
              'rgba(255, 165, 0, 1)',
              'rgba(0, 0, 139, 1)',
              'rgba(0, 128, 0, 1)',
              'rgba(255, 20, 147, 1)',
              'rgba(148, 0, 211, 1)'
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
                'rgba(0, 128, 128, 1)',
                'rgba(255, 165, 0, 1)',
                'rgba(0, 0, 139, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(255, 20, 147, 1)',
                'rgba(148, 0, 211, 1)'
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
      // Create doughnut chart
const doughnutChartData = Object.values(servicesCount);
const doughnutChartLabels = Object.keys(servicesCount);
this.doughnutChart = new Chart('doughnutChart', {
  type: 'doughnut',
  data: {
    labels: doughnutChartLabels,
    datasets: [{
      data: doughnutChartData,
      backgroundColor: [
        'rgba(0, 128, 128, 1)',
        'rgba(255, 165, 0, 1)',
        'rgba(0, 0, 139, 1)',
        'rgba(0, 128, 0, 1)',
        'rgba(255, 20, 147, 1)',
        'rgba(148, 0, 211, 1)'
      ]
    }]
  }
});
    },
    (error: any) => console.error('Error while fetchng workers from database', error)
    );
    
  }

}
