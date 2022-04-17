import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-observables2',
  templateUrl: './observables2.component.html',
  styleUrls: ['./observables2.component.sass'],
})
export class Observables2Component implements OnInit {

  minhaObservable(nome: string): Observable<string> {
    return new Observable((subscriber) => {
      if (nome === 'Rodrigo') {
        subscriber.next('Olá 1 ' + nome);
        subscriber.next('Olá 2 ' + nome);
        setTimeout(() => {
          subscriber.next('Olá 3 com delay ' + nome);
        }, 5000);
        subscriber.complete();//o complete acabou com a comunicacao e nao executou o next dentro do timeout
      } else {
        subscriber.error('Ops! Deu erro !');
      }
    });
  }

  constructor() {}

  ngOnInit(): void {

    const oberver = {
      next: valor => alert('Next: ' + valor),
      error: valor => alert('Erro: ' + valor),
      complete: () => alert('COMPLETE'),
    };

    const obs = this.minhaObservable('Rodrigo');
    obs.subscribe(oberver);

  }
}
