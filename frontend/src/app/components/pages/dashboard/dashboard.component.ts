import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from 'src/app/interfaces/Course';
import { Teacher } from 'src/app/interfaces/Teacher';
import { GetCoursesService } from 'src/app/services/get-courses.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faPlus = faPlus;
  teachers: Teacher[] = [
    {
      id: 1,
      name: 'Roberto',
      surname: 'Bressa',
      email: 'roberto@mail.com',
      password: '123456',
      course: 'Biologia',
    },
    {
      id: 1,
      name: 'Roberto',
      surname: 'Bressa',
      email: 'roberto@mail.com',
      password: '123456',
      course: 'Biologia',
    }
  ]

  constructor() {  }

  ngOnInit() {} 

}
