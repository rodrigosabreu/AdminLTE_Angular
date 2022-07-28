import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmissorComponent } from './emissor/emissor.component';
import { VisualizadorComponent } from './visualizador/visualizador.component';
import { AppService } from './services/app-service.service';



@NgModule({
  declarations: [
    EmissorComponent,
    VisualizadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EmissorComponent,
    VisualizadorComponent
  ],
  providers:[
    AppService
  ]
})
export class BehaviorSubjectModule {}
