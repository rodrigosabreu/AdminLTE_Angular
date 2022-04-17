import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
      },


      {
        path: 'imobi',
        loadChildren: () =>
          import('./Funcionalidades2/funcionalidades2.module').then(
            (m) => m.Funcionalidades2Module
          ),
      },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
