import { UsersService } from './../../services/users.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users : User[];
  totalRecords : Number;
  page : Number = 1;


  constructor(private UsersService : UsersService) { 
  }


  ngOnInit(): void {

    this.UsersService.getUsers().subscribe(
      (res)=> {
        // console.log("users", res);
        this.users = res;
        this.totalRecords = res.length;
        console.log(this.totalRecords);
        console.log(this.users)
      },
      (err)=>console.log(err)
    )
  }

}
