import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { ConteudoListComponent } from './list/conteudo-list/conteudo-list.component';

@NgModule({
  declarations: [ListComponent, ConteudoListComponent],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
