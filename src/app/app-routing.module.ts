import { HomeComponent } from './Funcionalidades/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './Funcionalidades/home/detalhes/detalhes.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },




  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./Funcionalidades/funcionalidades.module').then(
            (m) => m.FuncionalidadesModule
          ),
      }
    ],
  },


  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./Funcionalidades2/funcionalidades2.module').then(
            (m) => m.Funcionalidades2Module
          ),
      }
    ],
  },




  {
    path: 'produto-lazy-loading',
        loadChildren: () => import('./lazy-loading/produto.module')
        .then((m) => m.ProdutoModule),
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
