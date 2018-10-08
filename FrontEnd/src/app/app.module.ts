import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NbThemeModule, NbSidebarModule, NbSidebarService, NbMenuModule, NbToastrModule, NbWindowModule, NbDialogModule } from '@nebular/theme';
import { NebularModule } from '../Modules/Nebular.module';
import { PrimeNgModule } from '../Modules/primeNg.module';


import { LoginComponent } from '../Pages/login/login.component';
import { DashBoardComponent } from '../Pages/DashBoard/dash-board.component';
import { RoutingModule } from './app.routing';

import { CursosComponent } from './../Components/cursos/cursos.component';
import { GraficosComponent } from '../Components/graficos/graficos.component';
import { HeaderComponent } from '../Components/Header/header.component';
import { GetDataService } from '../Services/getDataSrv.service';
import { LoginSrvService } from '../Services/loginSrv.service';

const config = {}

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
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbDialogModule.forRoot(config),
    NbThemeModule.forRoot({ name: 'cosmic' }),
  ],
  providers: [
    NbSidebarService,
    GetDataService,
    LoginSrvService,
    NbWindowModule.forRoot().providers,
    NbSidebarModule.forRoot().providers,
    NbMenuModule.forRoot().providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
