import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';
import { from, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // public usersUrl: string ='https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {

   }

   getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`)
  }
}
