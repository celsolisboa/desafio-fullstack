import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginPageComponent } from './views/login-page/login-page.component';

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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
