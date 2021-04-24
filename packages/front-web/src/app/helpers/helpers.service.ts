import { Injectable } from '@angular/core';

@Injectable ({
    providedIn: 'root'
})

export class Helpers {
    [x: string]: any;
    routesData = [
        {
            title: 'Início',
            breadcrumb: '/inicio',
            path: '/home',
            icon: 'home'
        },
        {
            title: 'Cursos',
            breadcrumb: '/inicio/cursos',
            path: '/courses',
            icon: 'courses'
        },
        {
            title: 'Criar Curso',
            breadcrumb: '/inicio/cursos/criar',
            path: '/courses/edit',
            icon: 'create'
        }
    ]

    getCurrentPathName(): string {
        return window.location.pathname
    }
}