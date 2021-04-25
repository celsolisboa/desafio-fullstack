import { CourseService } from "../course.service";
import { Component, OnInit } from '@angular/core';
import { Course } from '../../../course.model';
import { Router } from "@angular/router";
import { HeaderService } from "../../header/header.service";
import { BreakpointObserver, Breakpoints, BreakpointState } from "@angular/cdk/layout";
import { Observable } from "rxjs";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset)

  typeForm: string = "create"

  unformattedTeachers: any = ''
  unformattedClasses: any = ''

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
    private breakpointObserver: BreakpointObserver,
    private headerService: HeaderService,
    private courseService: CourseService, 
    private router: Router
    ) {
      this.setIfIsCreateOrEdit()
      if (this.typeForm == 'edit') this.setCourseFromFormCourse()

      headerService.headerData = {
        title: this.typeForm=='edit' ? 'Editar Curso' : 'Criar Curso',
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

  setCourseFromFormCourse(): void {
    this.course = this.courseService.formCourse
    this.unformattedClasses = this.course.classes
    this.unformattedTeachers = this.course.teachers
    this.unformattedClasses = JSON.parse(this.unformattedClasses).join(',')
    this.unformattedTeachers = JSON.parse(this.unformattedTeachers).join(',')
  }

  formatCoursesForSubmission(): void {
    this.course.teachers = JSON.stringify(this.unformattedTeachers.trim().split(','))
    this.course.classes = JSON.stringify(this.unformattedClasses.trim().split(','))
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
    this.formatCoursesForSubmission()
    this.courseService.updateCourseAsync(this.course).subscribe(() => {
      this.courseService.showMessage('Curso editado com sucesso!')
      this.redirectToCourse()
    })
  }

  clearFields(): void {
    this.course.title = ''
    this.unformattedTeachers = ''
    this.unformattedClasses = ''
    this.course.start_time = '',
    this.course.end_time = ''
  }

  redirectToCourse(): void {
    this.router.navigate(['courses'])
  }
}
