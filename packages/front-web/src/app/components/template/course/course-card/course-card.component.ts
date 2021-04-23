import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/components/course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  courses: Course[] = []

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCoursesAsync().subscribe(courses => {
      this.courses = courses
    })
  }

  getFormattedTime(timeObj: any): String {
    return `${timeObj.init} às ${timeObj.end}`
  }

}
