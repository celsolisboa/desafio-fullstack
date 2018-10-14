import { Routes } from '@angular/router'
import { LoginComponent } from './login-component/login.component';
import { CursosComponent } from './cursos/cursos.component';

export const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: CursosComponent }
]