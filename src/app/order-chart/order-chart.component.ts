import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { OrderTableService } from '../order-table.service';


@Component({
  selector: 'app-order-chart',
  templateUrl: './order-chart.component.html',
  styleUrls: ['./order-chart.component.css']
})
export class OrderChartComponent implements OnInit {

  users: any = [];
  displayedColumns: string[] = ['id','name', 'mobileNumber','address','pinCode','paidStatus','orderId','createdAt'];
  dataSource: any = new MatTableDataSource();
  searchText: string = '';
  dataReady: boolean = false;

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private OrderTableService: OrderTableService) { }

  ngOnInit(): void {
    this.OrderTableService.getOrders().subscribe(
      (response: any) => {
        console.log("Orders fetched successfully",response);
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
    user.name.toLowerCase().includes(filterValue) ||
    user.mobileNumber.toLowerCase().includes(filterValue) ||
    user.address.toLowerCase().includes(filterValue) ||
    user.pinCode.toLowerCase().includes(filterValue) ||
    user.paidStatus.toLowerCase().includes(filterValue) ||
    user.orderId.toLowerCase().includes(filterValue) ||
    user.createdAt.toLowerCase().includes(filterValue)
  ));
  
  }

}


