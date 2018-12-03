import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCursoComponent } from './components/form-curso/form-curso.component';
import { ListCursosComponent } from './components/list-cursos/list-cursos.component';
import { FormLoginComponent } from './components/form-login/form-login.component';

const routes: Routes = [
  { path: 'add', component: FormCursoComponent },
  { path: 'cursos', component: ListCursosComponent },
  { path: '', component: FormLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
