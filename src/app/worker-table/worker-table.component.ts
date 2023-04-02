import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkerTableService } from '../worker-table.service';
import { MatTableDataSource } from '@angular/material/table';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-worker-table',
  templateUrl: './worker-table.component.html',
  styleUrls: ['./worker-table.component.css']
})
export class WorkerTableComponent implements OnInit {
  users: any = [];
  displayedColumns: string[] = ['id','name','workerid', 'email', 'mobileNumber','price','service'];
  dataSource: any = new MatTableDataSource();
  searchText: string = '';
  dataReady: boolean = false;

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private WorkerTableService: WorkerTableService) { }

  ngOnInit(): void {
    this.WorkerTableService.getWorkers().subscribe(
      (response: any) => {
        console.log("Workers fetched successfully",response);
        this.users = response;
        this.applyFilter();
        this.dataSource = this.users;
        this.dataReady = true;
      },
      (error)=>{
        console.log("Error while fetching workers from db", error);
      }
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter() {
    const filterValue = this.searchText.trim().toLowerCase();
    this.dataSource = new MatTableDataSource(this.users.filter((user: any) =>
      user.name.toLowerCase().includes(filterValue) || user.email.toLowerCase().includes(filterValue) || user.mobileNumber.toLowerCase().includes(filterValue)
    ));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}

