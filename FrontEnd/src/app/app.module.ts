
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from '../Pages/login/login.component';
import { DashBoardComponent } from '../Pages/DashBoard/dash-board.component';
import { RoutingModule } from './app.routing';

import { HeaderComponent } from '../Components/header/header.component';
import { CursosComponent } from './../Components/cursos/cursos.component';
import { GraficosComponent } from '../Components/graficos/graficos.component';


import { MDBBootstrapModule } from 'angular-bootstrap-md';

]
import { NbThemeModule, NbSidebarModule, NbSidebarService, NbMenuModule, NbLayoutModule } from '@nebular/theme';
import { NebularModule } from '../Modules/Nebular.module';









@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    LoginComponent,
    HeaderComponent,
    CursosComponent,
    GraficosComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NebularModule,
    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot({ name: 'cosmic' }),
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    NbSidebarService,
    NbSidebarModule.forRoot().providers,
    NbMenuModule.forRoot().providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
