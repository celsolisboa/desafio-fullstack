import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatSelectModule } from '@angular/material';


import { ListComponent } from './list/list.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { ConteudoListComponent } from './list/conteudo-list/conteudo-list.component';
import { CursoFormComponent } from './curso-form/curso-form.component';

@NgModule({
  declarations: [ListComponent, ConteudoListComponent, CursoFormComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class CursosModule { }
