import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [DetalheCursoComponent, CursosComponent],
  imports: [
    CommonModule
  ]
})
export class CursoModule { }
