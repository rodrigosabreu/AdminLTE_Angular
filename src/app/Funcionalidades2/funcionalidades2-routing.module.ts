import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulacaoImobiComponent } from './simulacao-imobi/simulacao-imobi.component';

const routes: Routes = [

   { path: 'simulacao-imobi', component: SimulacaoImobiComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Funcionalidades2RoutingModule { }
