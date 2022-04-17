import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass'],
})
export class DataBindingComponent implements OnInit {
  public contadorClique: number = 0;
  public estadoBotao: boolean = false;
  public nome: string = '';
  public urlImagem: string =
    'https://angular.io/assets/images/logos/angular/angular.svg';

  adicionarClique() {
    this.contadorClique++;
    if(this.estadoBotao == false && this.contadorClique > 0){
      this.estadoBotao = true;
    }
  }

  removerClique() {
    if (this.contadorClique > 0) {
      this.contadorClique--;
    }
    if (this.contadorClique == 0) {
      this.estadoBotao = false;
    }
  }

  obterTexto(): string {
    return '{{}}';
  }

  keyUp(event: any){
    this.nome = event.target.value;
  }

  constructor() {}

  ngOnInit(): void {}
}
