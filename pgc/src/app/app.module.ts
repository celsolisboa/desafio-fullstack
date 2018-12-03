import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FormCursoComponent } from './components/form-curso/form-curso.component';
import { ListCursosComponent } from './components/list-cursos/list-cursos.component';

import { CursosService } from './services/cursos.service'
import { ProfessoresService } from './services/professores.service'
import { SalasService } from './services/salas.service'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormCursoComponent,
    ListCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CursosService,
    ProfessoresService,
    SalasService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
