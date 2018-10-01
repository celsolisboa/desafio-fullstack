
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from '../Pages/login/login.component';
import { DashBoardComponent } from '../Pages/DashBoard/dash-board.component';


const AppRoutes: Routes = [
    { path: 'Login', component: LoginComponent },
    { path: 'Home', component: DashBoardComponent },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            AppRoutes, { enableTracing: false }
        )
    ],
    exports: [
        RouterModule
    ]
})


export class RoutingModule { }
