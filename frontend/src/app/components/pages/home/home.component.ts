import { Component, OnInit } from '@angular/core';

import { TeacherLogin } from 'src/app/interfaces/Teacher';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  async createHandler(teacher: TeacherLogin) {
    const formData = new FormData();

    formData.append('email', teacher.email);
    formData.append('password', teacher.password)

    await this.loginService.createLogin(formData).subscribe();
  }

}
