import { Component, Inject, OnInit, forwardRef } from '@angular/core';
import { WorkerTableService } from '../worker-table.service';

@Component({
  selector: 'app-worker-table',
  templateUrl: './worker-table.component.html',
  styleUrls: ['./worker-table.component.css']
})
export class WorkerTableComponent implements OnInit {

  users: any = [];
  dataReady: boolean = false; // add this flag variable

  constructor(@Inject(forwardRef(() => WorkerTableService)) private WorkerTableService: WorkerTableService) { 
  }

  showAllWorkers(){
    this.WorkerTableService.getWorkers().subscribe(
      (response: any) => {
        console.log("Worker fetched successfully",response);
        this.users = response;
        this.dataReady = true; // set the flag variable to true when the data is ready
      },
      (error)=>{
        console.log("Error while fetching workers from db", error);
      }
    );
  }

  ngOnInit(): void {
  }


}
