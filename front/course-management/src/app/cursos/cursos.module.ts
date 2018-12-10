import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatSelectModule, MatSnackBar, MatSnackBarModule } from '@angular/material';


import { ListComponent } from './list/list.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { ConteudoListComponent } from './list/conteudo-list/conteudo-list.component';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { CursoService } from './curso.service';
import { ProfessorService } from '../comum/services/professor.service';
import { SalaService } from '../comum/services/sala.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteReusableStrategy } from '../RouteReusableStrategy';
import { RouteReuseStrategy } from '@angular/router';
import { UtilService } from 'src/app/comum/services/util.service';

@NgModule({
  declarations: [ListComponent, ConteudoListComponent, CursoFormComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [UtilService, CursoService, ProfessorService, SalaService,
    { provide: RouteReuseStrategy, useClass: RouteReusableStrategy }
  ]
})
export class CursosModule { }
