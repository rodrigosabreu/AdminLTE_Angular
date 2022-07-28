import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdensNavegacaoComponent } from './ordens-navegacao.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:
  [
    OrdensNavegacaoComponent
  ],
  declarations: [OrdensNavegacaoComponent]
})
export class OrdensNavegacaoModule { }
