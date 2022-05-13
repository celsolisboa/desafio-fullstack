import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userAuthenticated: boolean = false;

  showMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router, private httpService: HttpService) {}

  async login(user: User) {
    await this.httpService.post('/auth/signin', user).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.response);
        localStorage.setItem('loggedin', 'true');
        this.userAuthenticated = true;
        this.showMenuEmmiter.emit(true);
        this.router.navigate(['/']);
      },
      error: (error) => console.log(error),
    });
  }
}
