import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../Pages/login/login.component';
import { DashBoardComponent } from '../Pages/DashBoard/dash-board.component';
const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: DashBoardComponent },
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(
    routes, { enableTracing: false }
  )],
  exports: [RouterModule]
})
export class RoutingModule { }
