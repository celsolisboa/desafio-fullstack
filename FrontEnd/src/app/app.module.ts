import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ToastyModule} from 'ng2-toasty';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-modules';
import { CursoModule } from './curso/curso.module';
import { AuthModule } from './auth/auth.module';
import { CursoService } from './curso/curso.service';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursoModule,
    AuthModule,
    ToastyModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot (),
    MultiselectDropdownModule,
    CommonModule,
    FormsModule
  ],
  exports:[
  ],
  providers: [CursoService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
