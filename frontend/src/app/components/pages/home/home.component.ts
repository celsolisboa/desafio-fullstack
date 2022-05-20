import { Component, OnInit } from '@angular/core';

import { TeacherLogin } from 'src/app/interfaces/Teacher';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService, public router: Router) { }

  ngOnInit(): void {
  }

  async createHandler(teacher: TeacherLogin) {    
    await this.loginService.createLogin(teacher).subscribe((res: any) => {
      localStorage.setItem('access_token', res.token); 
      this.router.navigate(['dashboard/']);     
    });
  }

}
