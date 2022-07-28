import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdensComponent } from './ordens.component';
import { OrdensNavegacaoModule } from '../componentes/ordens-navegacao/ordens-navegacao.module';
import { OrdensFiltroModule } from '../componentes/ordens-filtro/ordens-filtro.module';
import { OrdensListModule } from '../componentes/ordens-list/ordens-list.module';



@NgModule({
  imports: [
    CommonModule,
    OrdensNavegacaoModule,
    OrdensFiltroModule,
    OrdensListModule
  ],
  declarations: [OrdensComponent]
})
export class OrdensModule { }
