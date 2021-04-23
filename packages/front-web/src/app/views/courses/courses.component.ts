import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToCourseCreate(): void {
    this.router.navigate(['/courses/create'])
  }
}
