import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Funcionalidades/not-found/not-found.component';


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

  {
    path: '**', component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
