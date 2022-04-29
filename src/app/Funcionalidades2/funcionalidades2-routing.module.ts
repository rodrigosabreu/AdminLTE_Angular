import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCepComponent } from './consulta-cep/consulta-cep.component';
import { SimulacaoImobiComponent } from './simulacao-imobi/simulacao-imobi.component';

const routes: Routes = [

   { path: 'simulacao-imobi', component: SimulacaoImobiComponent },
   { path: 'consulta-cep', component: ConsultaCepComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Funcionalidades2RoutingModule { }
