import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/components/course.model';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/helpers/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  courses: Course[] = []

  constructor(
    private courseService: CourseService, 
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.courseService.getCoursesAsync().subscribe(courses => {
      this.courses = courses
    })
  }

  openDialog(courseTitle: string, id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '600px',
      data: {
        title: `Você está prestes a deletar ${courseTitle}`, 
        description: "Tem certeza que deseja deletar este curso? Esta ação não poderá ser desfeita.", 
        buttonTrue: "Deletar",
        buttonFalse: "Cancelar"
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.deleteCourse(id)
    })
  }


  getFormattedTime(start_time: string, end_time: string): string {
    return `${start_time} às ${end_time}`
  }

  getStringOfTeachers(teachers: any): string {
    const parsedTeachers = JSON.parse(teachers)
    if(parsedTeachers.length > 2) return `${parsedTeachers.slice(0,2).join(" , ")}...`
    return parsedTeachers.join(" , ")
  }

  getStringOfClasses(classes: any): string {
    const parsedClasses = JSON.parse(classes)
    if(parsedClasses.length > 2) return `${parsedClasses.slice(0,2).join(" , ")}...`
    return parsedClasses.join(" , ")
  }

  redirectEditCourse(course: Course): void {
    this.courseService.setFormCourses(course)
    this.router.navigate([`/courses/edit/${course.id}`])
  }

  deleteCourse(id: string): void {
    this.courseService.deleteCourseByIdAsync(id).subscribe(() => {
      const deletedCourse = this.courseService.deleteCourseByIdAsync(id)
      if (deletedCourse) this.deleteCourseFromCourses(id)
    })
  }

  deleteCourseFromCourses(id: string): void {
    const course = this.courses.filter(course => course.id == id)[0]
    this.courses.splice(this.courses.indexOf(course), 1)
  }
}
