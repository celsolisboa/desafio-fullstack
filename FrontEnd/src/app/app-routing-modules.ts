import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
      {path: '', component: LoginComponent, canActivate:[AuthGuard]}

];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule { }


