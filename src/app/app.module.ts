import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Funcionalidades2Module } from './Funcionalidades2/funcionalidades2.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Funcionalidades2Module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
