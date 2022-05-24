import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseFormComponent } from './course-form/course-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/form', component: CourseFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
