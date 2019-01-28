import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos/cursos.component';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
      {path: 'cursos', component: CursosComponent, canActivate:[AuthGuard] },
      {path: 'cursos/detalhes/:id', component: DetalheCursoComponent, canActivate:[AuthGuard]},
      {path: 'cursos/novo', component: DetalheCursoComponent, canActivate:[AuthGuard]}


];

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class CursoRoutingModule { }
