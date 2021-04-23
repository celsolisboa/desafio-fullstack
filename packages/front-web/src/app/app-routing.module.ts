import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { CourseCreateComponent } from './components/template/course/course-create/course-create.component';
import { CoursesComponent } from './views/courses/courses.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Login",
      icon: "login"
    },
    component: LoginPageComponent,
  },
  {
    path: "home",
    data: {
      title: "Início",
      icon: "home"
    },
    component: HomeComponent,
  },
  {
    path: "courses",
    data: {
      title: "Cursos",
      icon: "courses"
    },
    component: CoursesComponent,
  },
  {
    path: "courses/create",
    data: {
      title: "Cursos",
      icon: "courses"
    },
    component: CourseCreateComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
