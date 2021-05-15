import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule } from '@angular/material';

import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsService } from './details.service';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  providers: [
    DetailsService
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,

    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule
  ]
})
export class DetailsModule { }
