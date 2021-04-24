import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './components/user.model'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  BASE_URL = 'http://localhost:3001' 

  userLogin: User = {
    id: 0,
    name: "",
    email: "",
    password: ""
  }

  private _drawerSideNav = new BehaviorSubject<boolean>(false)

  constructor(
    private router: Router,
    private snackBar: MatSnackBar, 
    private http: HttpClient
  ) { }

  isLoggedIn(): boolean {
    return !!this.userLogin.email
  }

  logout(): void {
    this.userLogin.email = ''
    this.router.navigate(['/'])
  }

  getUsersAsync(): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/users`)
  }

  showSnackBarMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  get drawerSideNav(): boolean {
    return this._drawerSideNav.value
  }

  set drawerSideNav(data: boolean) {
    this._drawerSideNav.next(data)
  }
}
