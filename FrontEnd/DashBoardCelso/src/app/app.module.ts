import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from '../Pages/login/login.component';
import { DashBoardComponent } from '../Pages/DashBoard/dash-board.component';
import { RoutingModule } from './app.routing';
import { HeaderComponent } from '../Components/header/header.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PrimeNgModule } from '../Modules/primeNg.module';




@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    PrimeNgModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
