import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CursoComponent } from './curso/curso.component';
import { NovoCursoComponent } from './curso-novo/novo-curso.component';
import { ApiService } from './controller/services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './components/cards.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CursoComponent,
    NovoCursoComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule, 
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
