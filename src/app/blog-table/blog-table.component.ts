import { Component, OnInit, ViewChild } from '@angular/core';
import { AllBlogService } from '../all-blog.service';
import { MatTableDataSource } from '@angular/material/table';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-blog-table',
  templateUrl: './blog-table.component.html',
  styleUrls: ['./blog-table.component.css']
})
export class BlogTableComponent implements OnInit {

  users: any = [];
  displayedColumns: string[] = ['id','author', 'title', 'description'];
  dataSource: any = new MatTableDataSource();
  searchText: string = '';
  dataReady: boolean = false;

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private allBlogService: AllBlogService) { }

  ngOnInit(): void {
    this.allBlogService.getBlogs().subscribe(
      (response: any) => {
        console.log("Blogs fetched successfully",response);
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
      user.author.toLowerCase().includes(filterValue) || user.title.toLowerCase().includes(filterValue)  
      || user.description.toLowerCase().includes(filterValue)
    ));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}




