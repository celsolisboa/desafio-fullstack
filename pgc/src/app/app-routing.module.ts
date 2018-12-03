import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCursoComponent } from './components/form-curso/form-curso.component';
import { ListCursosComponent } from './components/list-cursos/list-cursos.component';

const routes: Routes = [
  { path: 'add', component: FormCursoComponent },
  { path: '', component: ListCursosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
