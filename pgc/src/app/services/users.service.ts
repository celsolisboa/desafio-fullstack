import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlApiUsers='http://127.0.0.1:3000/api/Users';

@Injectable()
export class UsersService {

  result: any = [];

  constructor(private http: HttpClient){}

  login(user) {
    console.log(user)
    return this.http.post(`${urlApiUsers}/login`, user);
  };


}
