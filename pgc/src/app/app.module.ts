import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FormCursoComponent } from './components/form-curso/form-curso.component';
import { ListCursosComponent } from './components/list-cursos/list-cursos.component';

import { CursosService } from './services/cursos.service'

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
    ReactiveFormsModule
  ],
  providers: [
    CursosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
