import { CourseService } from "../course.service";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../../course.model';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {

  course: Course = {
    title: '',
    teachers: [],
    classes: [],
    time: {
        init: '',
        end: ''
    }
  }

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {}

  createCourse(): void {
    this.courseService.postCourseAsync(this.course).subscribe(() => {
      this.courseService.showMessage('Curso criado com sucesso')
      this.redirectToCourse()
    })
  }

  clearFields(): void {
    this.course.title = ''
    this.course.teachers = []
    this.course.classes = []
    this.course.time = {init: '',end: ''}
  }

  redirectToCourse(): void {
    this.router.navigate(['courses'])
  }
}
