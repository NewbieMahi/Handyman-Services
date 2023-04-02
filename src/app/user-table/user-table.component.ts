// import { Component, OnInit, forwardRef, Inject} from '@angular/core';
// import { UserTableService } from '../user-table.service';

// import {MatTableDataSource} from '@angular/material/table';

// @Component({
//   selector: 'app-user-table',
//   templateUrl: './user-table.component.html',
//   styleUrls: ['./user-table.component.css']
// })
// export class UserTableComponent implements OnInit {
//   users: any = [];
//   dataSource: any = new MatTableDataSource();
//   // dataSource: MatTableDataSource<any> = new MatTableDataSource(this.)

//   dataReady: boolean = false; // add this flag variable

//   constructor(@Inject(forwardRef(() => UserTableService)) private UserTableService: UserTableService) { 
//   }

//   // showAllUsers(){
    
//   // }

//   ngOnInit(): void {
//     this.UserTableService.getUsers().subscribe(
//       (response: any) => {
//         console.log("Users fetched successfully",response);
//         this.dataSource = new MatTableDataSource(response);
//         console.log(this.dataSource);
//         this.users = response;
//         this.dataReady = true; // set the flag variable to true when the data is ready
//       },
//       (error)=>{
//         console.log("Error while fetching users from db", error);
//       }
//     );
//   }

// }

import { Component, OnInit, ViewChild } from '@angular/core';
import { UserTableService } from '../user-table.service';
import { MatTableDataSource } from '@angular/material/table';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  users: any = [];
  displayedColumns: string[] = ['id','name', 'email', 'mobileNumber'];
  dataSource: any = new MatTableDataSource();
  searchText: string = '';
  dataReady: boolean = false;

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private userTableService: UserTableService) { }

  ngOnInit(): void {
    this.userTableService.getUsers().subscribe(
      (response: any) => {
        console.log("Users fetched successfully",response);
        this.users = response;
        this.applyFilter();
        this.dataSource = this.users;
        this.dataReady = true;
      },
      (error)=>{
        console.log("Error while fetching users from db", error);
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
