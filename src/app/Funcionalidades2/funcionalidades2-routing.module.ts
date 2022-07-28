import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCepComponent } from './consulta-cep/consulta-cep.component';
import { ConsultaCep2Component } from './consulta-cep2/consulta-cep2.component';
import { ConsultaCep3Component } from './consulta-cep3/consulta-cep3.component';
import { MenuComponent } from './menu/menu.component';
import { Menu2Component } from './menu2/menu2.component';
import { OrdensComponent } from './ordens/ordens.component';
import { PropostasComponent } from './propostas/propostas.component';
import { Propostas2Component } from './propostas2/propostas2.component';
import { SimulacaoImobiComponent } from './simulacao-imobi/simulacao-imobi.component';

const routes: Routes = [

   { path: 'simulacao-imobi', component: SimulacaoImobiComponent },
   { path: 'consulta-cep', component: ConsultaCepComponent },
   { path: 'consulta-cep2', component: ConsultaCep2Component },
   { path: 'consulta-cep3', component: ConsultaCep3Component },
   { path: 'propostas', component: PropostasComponent },
   { path: 'propostas2', component: Propostas2Component },
   { path: 'menu', component: MenuComponent },
   { path: 'menu2', component: Menu2Component },
   { path: 'ordens', component: OrdensComponent },
   { path: 'BehaviorSubject', component: BehaviorSubjectComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Funcionalidades2RoutingModule { }
