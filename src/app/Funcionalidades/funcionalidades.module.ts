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
import { ProdutosComponentesComponent } from './produtos-componentes/produtos-componentes.component';
import { ProdutoCardDetalheComponent } from './componentes/produto-card-detalhe/produto-card-detalhe.component';
import { ProdutoCountComponent } from './componentes/produto-count/produto-count.component';
import { JoComponent } from './jo/jo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { FuncionalidadeAppComponent } from './funcionalidade.app.component';
import { Consulta_cep_externoComponent } from './componentes/consulta_cep_externo/consulta_cep_externo.component';
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
    ProdutosComponentesComponent,
    ProdutoCardDetalheComponent,
    ProdutoCountComponent,
    JoComponent,
    NotFoundComponent,
    EditarProdutoComponent,
    FuncionalidadeAppComponent

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
  exports: [
    NotFoundComponent

  ],
  providers: [ProdutoService],
})
export class FuncionalidadesModule {}
