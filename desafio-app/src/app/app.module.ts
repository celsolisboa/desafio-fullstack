import { SalaService } from './services/sala.service';
import { ProfessorService } from './services/professor.service';
import { CursoService } from './services/curso.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { CursoComponent } from './curso/curso.component';

import { HttpClientModule } from '@angular/common/http';
import { DetalhesCursoComponent } from './detalhes-curso/detalhes-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CursoComponent,
    DetalhesCursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    CursoService,
    ProfessorService,
    SalaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
