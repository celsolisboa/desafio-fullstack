import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import * as Reflect from "reflect-metadata";

import { AppComponent } from './app.component';
import { LoginComponent } from './login-component/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './cursos/curso/curso.component';

import { ROUTES } from './app.routes';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CadastroCursoComponent } from './cursos/curso/cadastro-curso/cadastro-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CursosComponent,
    CursoComponent,
    CadastroCursoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
