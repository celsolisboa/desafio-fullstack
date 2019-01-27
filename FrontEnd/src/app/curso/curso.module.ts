import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoRoutingModule } from './curso-routing.modules';
import { CursoService } from './curso.service';


@NgModule({
  declarations: [DetalheCursoComponent, CursosComponent],
  imports: [
    CommonModule,
    CursoRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MultiselectDropdownModule,
    NgMultiSelectDropDownModule

  ],
  providers:[CursoService]
})
export class CursoModule { }
