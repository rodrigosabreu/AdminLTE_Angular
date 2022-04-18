import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulacaoCgiComponent } from './simulacao-cgi/simulacao-cgi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HomeComponent } from './home/home.component';
import { DetalhesComponent } from './home/detalhes/detalhes.component';
import { ContatoComponent } from './contato/contato.component';
import { ListaProdutoComponent } from './produtos/listar-produto/lista-produto.component';
import { CadComponent } from './cad/cad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TesteComponent } from './teste/teste.component';
import { FuncionalidadesRoutingModule } from './funcionalidades-routing.module';
import { ProdutoService } from '../Servicos/Prodduto/produto.service';

import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt';
import { ObservableUnsubcriberComponent } from './observable-unsubcriber/observable-unsubcriber.component';
import { ObservablesComponent } from './observables/observables.component';
import { Observables2Component } from './observables2/observables2.component';
import { PromisesComponent } from './promises/promises.component';
registerLocaleData(localPt);

@NgModule({
  declarations: [
    SimulacaoCgiComponent,
    DataBindingComponent,
    HomeComponent,
    DetalhesComponent,
    ContatoComponent,
    ListaProdutoComponent,
    CadComponent,
    TesteComponent,
    ObservableUnsubcriberComponent,
    ObservablesComponent,
    Observables2Component,
    PromisesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FuncionalidadesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProdutoService],
})
export class FuncionalidadesModule {}
