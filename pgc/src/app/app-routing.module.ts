import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCursoComponent } from './components/form-curso/form-curso.component';
import { ListCursosComponent } from './components/list-cursos/list-cursos.component';
import { FormLoginComponent } from './components/form-login/form-login.component';

import { SimpleGuardAuthGuard } from './simple-guard-auth.guard'

const routes: Routes = [
  { path: 'add', component: FormCursoComponent, canActivate: [SimpleGuardAuthGuard] },
  { path: 'edit/:cursoId', component: FormCursoComponent, canActivate: [SimpleGuardAuthGuard] },
  { path: 'cursos', component: ListCursosComponent, canActivate: [SimpleGuardAuthGuard] },
  { path: '', component: FormLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
