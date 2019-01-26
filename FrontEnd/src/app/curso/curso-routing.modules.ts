import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos/cursos.component';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';


const routes: Routes = [
      {path: 'cursos', component: CursosComponent },
      {path: 'cursos/detalhes/:id', component: DetalheCursoComponent },
      {path: 'cursos/novo', component: DetalheCursoComponent }


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
