import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCepComponent } from './consulta-cep/consulta-cep.component';
import { ConsultaCep2Component } from './consulta-cep2/consulta-cep2.component';
import { PropostasComponent } from './propostas/propostas.component';
import { SimulacaoImobiComponent } from './simulacao-imobi/simulacao-imobi.component';

const routes: Routes = [

   { path: 'simulacao-imobi', component: SimulacaoImobiComponent },
   { path: 'consulta-cep', component: ConsultaCepComponent },
   { path: 'consulta-cep2', component: ConsultaCep2Component },
   { path: 'lista-propostas', component: PropostasComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Funcionalidades2RoutingModule { }
