import { Component, OnInit, forwardRef, Inject} from '@angular/core';
import { UserTableService } from '../user-table.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  users: any = [];
  dataReady: boolean = false; // add this flag variable

  constructor(@Inject(forwardRef(() => UserTableService)) private UserTableService: UserTableService) { 
  }

  showAllUsers(){
    this.UserTableService.getUsers().subscribe(
      (response: any) => {
        console.log("Users fetched successfully",response);
        this.users = response;
        this.dataReady = true; // set the flag variable to true when the data is ready
      },
      (error)=>{
        console.log("Error while fetching users from db", error);
      }
    );
  }

  ngOnInit(): void {
  }

}