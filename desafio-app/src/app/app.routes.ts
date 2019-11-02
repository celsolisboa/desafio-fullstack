import { DetalhesCursoComponent } from './detalhes-curso/detalhes-curso.component';
import { CursoComponent } from './curso/curso.component';
import { Routes } from '@angular/router'

import { LoginComponent } from './login/login.component';

export const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'cursos', component: CursoComponent },
    { path: 'detalhes', component: DetalhesCursoComponent }
] 