import { Component, OnInit, resolveForwardRef } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.sass'],
})
export class PromisesComponent implements OnInit {

  minhaPromise(nome: string): Promise<string> {
    //promise pode retornar algo positivo ou negativo
    return new Promise((resolve, reject) => {
      if (nome == 'Rodrigo') {
        setTimeout(() => {
          resolve('Seja bem vindo ' + nome);
        },2000);
      }else{
        reject('Ops! Você não é o Rodrigo');
      }
    });
  }

  constructor() {}

  ngOnInit(): void {

    /* this.minhaPromise('Rodrigo')
    .then(result => alert(result)); */

    //tratando erro na promise
    this.minhaPromise('Rodrigoa')
    .then(result => alert(result))
    .catch(erro => alert(erro))

  }
}
