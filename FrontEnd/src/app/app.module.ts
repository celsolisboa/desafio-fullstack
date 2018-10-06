import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NbThemeModule, NbSidebarModule, NbSidebarService, NbMenuModule, NbToastrModule, NbLayoutModule } from '@nebular/theme';
import { NebularModule } from '../Modules/Nebular.module';
import { PrimeNgModule } from '../Modules/primeNg.module';


import { LoginComponent } from '../Pages/login/login.component';
import { DashBoardComponent } from '../Pages/DashBoard/dash-board.component';
import { RoutingModule } from './app.routing';

import { CursosComponent } from './../Components/cursos/cursos.component';
import { GraficosComponent } from '../Components/graficos/graficos.component';
import { HeaderComponent } from '../Components/header/header.component';

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
    BrowserAnimationsModule,
    FormsModule,
    NebularModule,
    PrimeNgModule,
    NbToastrModule.forRoot(),
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
