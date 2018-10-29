import { Routes } from '@angular/router'
import { LoginComponent } from './login-component/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CadastroCursoComponent } from './cursos/curso/cadastro-curso/cadastro-curso.component';

export const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/cadastrar', component: CadastroCursoComponent },
    { path: '**', redirectTo: '/login' }
]