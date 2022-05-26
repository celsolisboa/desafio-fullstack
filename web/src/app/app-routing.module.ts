import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso/curso.component';
import { LoginComponent } from './login/login.component';
import { NovoCursoComponent } from './curso-novo/novo-curso.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cursos', component: CursoComponent },
  { path: 'curso/novo-curso', component: NovoCursoComponent },
  { path: 'curso/editar/:id', component: NovoCursoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
