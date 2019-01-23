import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos/cursos.component';


const routes: Routes = [
      {path: 'cursos', component: CursosComponent }

];

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class CursoRoutingModule { }
