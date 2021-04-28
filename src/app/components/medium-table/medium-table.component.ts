import { UsersService } from './../../services/users.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-table',
  templateUrl: './medium-table.component.html',
  styleUrls: ['./medium-table.component.css']
})
export class MediumTableComponent implements OnInit {
  users: User[];
  totalRecords : Number;
  page : Number = 1;

  constructor(private UsersService: UsersService) { }

  ngOnInit(): void {
    this.UsersService.getUsers().subscribe(
      (res)=> {
        this.users = res;
        this.totalRecords = res.length;
      },
      (err)=>console.log(err)
    )
  }

}
