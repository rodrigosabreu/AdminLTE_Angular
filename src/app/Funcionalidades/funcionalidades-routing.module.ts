import { ObservablesComponent } from './observables/observables.component';
import { ObservableUnsubcriberComponent } from './observable-unsubcriber/observable-unsubcriber.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadComponent } from './cad/cad.component';
import { ContatoComponent } from './contato/contato.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DetalhesComponent } from './home/detalhes/detalhes.component';
import { HomeComponent } from './home/home.component';
import { ListaProdutoComponent } from './produtos/listar-produto/lista-produto.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SimulacaoCgiComponent } from './simulacao-cgi/simulacao-cgi.component';
import { Observables2Component } from './observables2/observables2.component';
import { PromisesComponent } from './promises/promises.component';

const routes: Routes = [

  { path: 'simulacao-cgi', component: SimulacaoCgiComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'produtos', component: ListaProdutoComponent },
  { path: 'cadastro', component: ReactiveFormsComponent },
  { path: 'cad', component: CadComponent },
  { path: 'produtos-detalhe/:id', component: ListaProdutoComponent },
  { path: 'observable-unsubcriber', component: ObservableUnsubcriberComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'observables2', component: Observables2Component },
  { path: 'promises', component: PromisesComponent },

  {path: 'home', component: HomeComponent,
    children: [{
        path: 'detalhes', component: DetalhesComponent,
      }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionalidadesRoutingModule { }
