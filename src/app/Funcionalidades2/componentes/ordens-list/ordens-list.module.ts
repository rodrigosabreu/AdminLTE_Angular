import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdensListComponent } from './ordens-list.component';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule


  ],
  declarations: [OrdensListComponent],
  exports: [OrdensListComponent]
})
export class OrdensListModule { }
