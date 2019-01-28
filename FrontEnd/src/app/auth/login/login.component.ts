import { Component, OnInit } from '@angular/core';
import { NgForm, } from '@angular/forms';
import { AuthService } from '../auth.service';

class User {
  email:string;
  passord:string;

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.user)
    .then(response => {

        
    })

  }
}
