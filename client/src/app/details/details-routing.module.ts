import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';
import { DetailsService } from './details.service';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent
  },
  {
    path: ':courseId',
    component: DetailsComponent,
    resolve: {
      course: DetailsService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
