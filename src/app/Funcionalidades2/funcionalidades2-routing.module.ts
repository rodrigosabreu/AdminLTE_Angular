import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulacaoImobiComponent } from './simulacao-imobi/simulacao-imobi.component';

const routes: Routes = [

   //{ path: 'simulacao-imobi', component: SimulacaoImobiComponent },

  // {path: 'home', component: HomeComponent,
  //   children: [{
  //       path: 'detalhes', component: DetalhesComponent,
  //     }]
  // }

  {
    path: '',  data: { title: 'Imobi' },
      children: [
        {path: '', redirectTo: 'simulacao'},
        {path: 'simulacao', component: SimulacaoImobiComponent, data: { title: 'simulacao-imobi'}},

      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Funcionalidades2RoutingModule { }
