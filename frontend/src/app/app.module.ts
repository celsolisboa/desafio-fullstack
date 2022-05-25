import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CursosListaComponent } from './views/cursos-lista/cursos-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { CriarCursoComponent } from './views/criar-curso/criar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosListaComponent,
    CriarCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
