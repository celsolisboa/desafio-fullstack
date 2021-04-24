import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './components/user.model'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  //https://mocki.io/v1/c9125120-8fde-4a5f-896c-4eb75bcc4b71
  BASE_URL = 'http://localhost:3000' 

  private _userData = new BehaviorSubject<User>({
    id: '',
    name: "",
    email: "",
    password: ""
  })

  private _drawerSideNav = new BehaviorSubject<boolean>(false)

  constructor(
    private router: Router,
    private snackBar: MatSnackBar, 
    private http: HttpClient
  ) { 
    this.getAndSetUserInSessionStorage()
  }

  isLoggedIn(): boolean {
    return !!this.userData.email && !!this.userData.id
  }

  logout(): void {
    this.userData.id = ''
    this.userData.email = ''

    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('userEmail')

    this.router.navigate(['/'])
  }

  getAndSetUserInSessionStorage(): void {
    const id = sessionStorage.getItem("userId")
    const email = sessionStorage.getItem("userEmail")

    if(id && email) {
      this.userData.id = id
      this.userData.email = email
    }
  }

  getUserAsync(): Observable<User> {
    const queryString = `${this.BASE_URL}/users?email=${this.userData.email}&password=${this.userData.password}`
    return this.http.get<User>(queryString).pipe(
      map(obj => obj),
      catchError(err => this.handleErrorMessage(err))
    )
  }

  showSnackBarMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  handleErrorMessage(error: any): Observable<any> {
    console.error(error.message)
    const errorMessage = error?.error?.message || 'Ocorreu um erro, por favor tente mais tarde!'
    this.showSnackBarMessage(errorMessage, true)
    return EMPTY
  }

  get userData(): User {
    return this._userData.value
  }

  set userData(user: User) {
    this._userData.next(user)
  }

  get drawerSideNav(): boolean {
    return this._drawerSideNav.value
  }

  set drawerSideNav(data: boolean) {
    this._drawerSideNav.next(data)
  }
}
