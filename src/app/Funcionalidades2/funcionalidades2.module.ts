import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ProdutoService } from '../Servicos/Prodduto/produto.service';

import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt';
import { Funcionalidades2RoutingModule } from './funcionalidades2-routing.module';
import { SimulacaoImobiComponent } from './simulacao-imobi/simulacao-imobi.component';

registerLocaleData(localPt);

@NgModule({
  declarations: [

  
    SimulacaoImobiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    Funcionalidades2RoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProdutoService],
})
export class Funcionalidades2Module {}
