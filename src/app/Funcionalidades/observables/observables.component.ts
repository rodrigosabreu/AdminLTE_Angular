import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.sass'],
})
export class ObservablesComponent implements OnInit {
  minhaObservable(nome: string): Observable<string> {
    return new Observable((subscriber) => {
      if (nome === 'Rodrigo') {
        subscriber.next('Olá 1 ' + nome);
        subscriber.next('Olá 2 ' + nome);
        setTimeout(() => {
          subscriber.next('Olá 3 com delay ' + nome);
        }, 2000);
      } else {
        subscriber.error('Ops! Deu erro !');
      }
    });
  }

  constructor() {}

  ngOnInit(): void {
    this.minhaObservable('Rodrigo').subscribe(
      result => alert(result),
      erro => alert(erro),
      () => alert('FIM')
    );
  }
}
