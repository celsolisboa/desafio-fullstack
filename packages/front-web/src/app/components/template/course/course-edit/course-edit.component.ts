import { CourseService } from "../course.service";
import { Component, OnInit } from '@angular/core';
import { Course } from '../../../course.model';
import { Router } from "@angular/router";
import { HeaderService } from "../../header/header.service";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {

  typeForm: string = "create"

  unformattedTeachers: string = ''
  unformattedClasses: string = ''

  course: Course = {
    id: '',
    user_id: '',
    title: '',
    teachers: [],
    classes: [],
    start_time: '',
    end_time: '',
  }

  constructor(
    private headerService: HeaderService,
    private courseService: CourseService, 
    private router: Router
    ) {
      this.setIfIsCreateOrEdit()
      if (this.typeForm == 'edit') this.course = this.courseService.formCourse

      headerService.headerData = {
        title: this.typeForm=='edit' ? 'Editar Curso' : 'Cadastro de Curso',
        icon: this.typeForm=='edit' ? 'edit' : 'add',
        routeUrl: this.typeForm=='edit' ? `/courses/edit/${this.course.id}` : '/courses/create'
      }
  }

  ngOnInit(): void {}

  setIfIsCreateOrEdit(): void {
    const path = window.location.pathname
    const arrPath = path.split("/")
    if (arrPath[arrPath.length-1] != 'create') this.typeForm = "edit"
  }

  createCourse(): void {
    this.course.teachers = [this.unformattedTeachers]
    this.course.classes = [this.unformattedClasses]
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
    this.course.start_time = '',
    this.course.end_time = ''
  }

  redirectToCourse(): void {
    this.router.navigate(['courses'])
  }
}
