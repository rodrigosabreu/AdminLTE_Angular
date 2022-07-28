import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdensFiltroComponent } from './ordens-filtro.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule

  ],
  exports:[OrdensFiltroComponent],
  declarations: [OrdensFiltroComponent],
  providers: []
})
export class OrdensFiltroModule { }
