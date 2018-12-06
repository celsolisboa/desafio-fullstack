import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { ConteudoListComponent } from './list/conteudo-list/conteudo-list.component';

const routes: Routes = [
    {
        path: "", component: ListComponent, children: [
            { path: "", component: ConteudoListComponent },
            { path: "create", component: CursoFormComponent },
            { path: "update/:id", component: CursoFormComponent },
            { path: "details/:id", component: CursoFormComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursosRoutingModule { }
