import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoRoutingModule } from './curso-routing.modules';

@NgModule({
  declarations: [DetalheCursoComponent, CursosComponent],
  imports: [
    CommonModule,
    CursoRoutingModule
  ]
})
export class CursoModule { }
