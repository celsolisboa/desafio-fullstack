import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartModule } from 'primeng/chart';
import { HttpClientModule } from '@angular/common/http';
import { NbThemeModule, NbSidebarModule, NbSidebarService, NbMenuModule, NbLayoutModule } from '@nebular/theme';
import { NebularModule } from '../Modules/Nebular.module';
import { PrimeNgModule } from '../Modules/primeNg.module';

import { LoginComponent } from '../Pages/login/login.component';
import { DashBoardComponent } from '../Pages/DashBoard/dash-board.component';
import { RoutingModule } from './app.routing';

import { HeaderComponent } from '../Components/header/header.component';
import { CursosComponent } from './../Components/cursos/cursos.component';
import { GraficosComponent } from '../Components/graficos/graficos.component';


@NgModule({
  declarations: [
    AppComponent,
    // Paginas
    DashBoardComponent,
    LoginComponent,
    // componentes
    HeaderComponent,
    CursosComponent,
    GraficosComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    NebularModule,
    PrimeNgModule,
    ChartModule,
    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot({ name: 'cosmic' }),
  ],
  providers: [
    NbSidebarService,
    NbSidebarModule.forRoot().providers,
    NbMenuModule.forRoot().providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
