import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    resolve: {
      courses: CoursesService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
