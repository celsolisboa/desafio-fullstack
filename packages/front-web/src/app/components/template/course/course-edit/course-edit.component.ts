import { CourseService } from "../course.service";
import { Component, OnInit } from '@angular/core';
import { Course } from '../../../course.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {

  typeForm: string = "create"

  course: Course = {
    id: '',
    title: '',
    teachers: [],
    classes: [],
    time: {
      init: '',
      end: ''
    }
  }

  constructor(
    private courseService: CourseService, 
    private router: Router
    ) {
      this.setIfIsCreateOrEdit()
      if (this.typeForm == 'edit') this.course = this.courseService.formCourse
  }

  ngOnInit(): void {}

  setIfIsCreateOrEdit(): void {
    const path = window.location.pathname
    const arrPath = path.split("/")
    if (arrPath[arrPath.length-1] != 'create') this.typeForm = "edit"
  }

  createCourse(): void {
    this.courseService.postCourseAsync(this.course).subscribe(() => {
      this.courseService.showMessage('Curso criado com sucesso!')
      this.redirectToCourse()
    })
  }

  editCourse(): void {
    this.courseService.updateCourseAsync(this.course).subscribe(() => {
      this.courseService.showMessage('Curso editado com sucesso!')
      this.redirectToCourse()
    })
  }

  clearFields(): void {
    this.course.title = ''
    this.course.teachers = []
    this.course.classes = []
    this.course.time = { init: '', end: '' }
  }

  redirectToCourse(): void {
    this.router.navigate(['courses'])
  }
}
