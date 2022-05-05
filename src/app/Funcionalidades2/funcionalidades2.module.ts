import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ProdutoService } from '../Servicos/Prodduto/produto.service';

import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt';
import { Funcionalidades2RoutingModule } from './funcionalidades2-routing.module';
import { SimulacaoImobiComponent } from './simulacao-imobi/simulacao-imobi.component';
import { ConsultaCepComponent } from './consulta-cep/consulta-cep.component';
import { CepService } from '../Servicos/Cep/cep.service';
import { ConsultaCep2Component } from './consulta-cep2/consulta-cep2.component';
import { FormEnderecoComponent } from './componentes/form-endereco/form-endereco.component';
import { LoadingComponent } from './componentes/loading/loading.component';
import { PropostasComponent } from './propostas/propostas.component';
import { ListaPropostasService } from '../Servicos/Proposta/lista-propostas.service';
import { DataTablesModule } from 'angular-datatables';
import { Propostas2Component } from './propostas2/propostas2.component';
import { NgBrazil } from 'ng-brazil';

registerLocaleData(localPt);

@NgModule({
  declarations: [
    SimulacaoImobiComponent,
    ConsultaCepComponent,
    ConsultaCep2Component,
    FormEnderecoComponent,
    LoadingComponent,
    PropostasComponent,
    Propostas2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    Funcionalidades2RoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgBrazil


  ],
  exports :[
    SimulacaoImobiComponent
  ],
  providers: [
    ProdutoService,
    CepService,
    ListaPropostasService
  ],
})
export class Funcionalidades2Module {}
