import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './components/pages/curso/curso.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NovoCursoComponent } from './components/pages/novo-curso/novo-curso.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cursos', component: CursoComponent},
  {path: 'curso/novo-curso', component: NovoCursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
