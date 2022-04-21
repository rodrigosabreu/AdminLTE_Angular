import { CommonModule } from '@angular/common';
import { SimulacaoCgiComponent } from './simulacao-cgi/simulacao-cgi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HomeComponent } from './home/home.component';
import { DetalhesComponent } from './home/detalhes/detalhes.component';
import { ContatoComponent } from './contato/contato.component';
import { ListaProdutoComponent } from './produtos/listar-produto/lista-produto.component';
import { CadComponent } from './cad/cad.component';
import { HttpClientModule } from '@angular/common/http';
import { TesteComponent } from './teste/teste.component';
import { FuncionalidadesRoutingModule } from './funcionalidades-routing.module';
import { ProdutoService } from '../Servicos/Prodduto/produto.service';


import { ObservableUnsubcriberComponent } from './observable-unsubcriber/observable-unsubcriber.component';
import { ObservablesComponent } from './observables/observables.component';
import { Observables2Component } from './observables2/observables2.component';
import { PromisesComponent } from './promises/promises.component';
import { Cad2Component } from './cad2/cad2.component';


import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';
import { Cad3Component } from './cad3/cad3.component';
import { FormDinamicoComponent } from './form-dinamico/form-dinamico.component';
registerLocaleData(localPt);



@NgModule({
  declarations: [
    SimulacaoCgiComponent,
    DataBindingComponent,
    HomeComponent,
    DetalhesComponent,
    ContatoComponent,
    ListaProdutoComponent,
    TesteComponent,
    ObservableUnsubcriberComponent,
    ObservablesComponent,
    Observables2Component,
    PromisesComponent,
    CadComponent,
    Cad2Component,
    Cad3Component,
    FormDinamicoComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FuncionalidadesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule
  ],
  providers: [ProdutoService],
})
export class FuncionalidadesModule {}
