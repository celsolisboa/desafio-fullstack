import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/controller/services/auth.service';
import { User } from 'src/app/controller/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {
    if (localStorage.getItem('loggedin') === 'true') {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {}

  handleSubmit(): void {
    this.authService.login(this.user);
  }

  handleRegister() {}
}