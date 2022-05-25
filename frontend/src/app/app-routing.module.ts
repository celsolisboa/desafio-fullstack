import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CursosListaComponent } from './views/cursos-lista/cursos-lista.component';
import { CriarCursoComponent } from './views/criar-curso/criar-curso.component';

const routes: Routes = [
  {
    path: 'login',
    component: HomeComponent
  },
  {
    path: 'cursos',
    component: CursosListaComponent
  },
  {
    path: 'registrar',
    component: CriarCursoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
