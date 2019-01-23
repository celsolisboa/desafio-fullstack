import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CursosComponent } from './curso/cursos/cursos.component';

const routes: Routes = [
      {path: '', component: CursosComponent }

];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule { }


