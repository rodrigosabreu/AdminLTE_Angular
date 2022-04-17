import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-unsubcriber',
  templateUrl: './observable-unsubcriber.component.html',
  styleUrls: ['./observable-unsubcriber.component.sass'],
})
export class ObservableUnsubcriberComponent implements OnInit {
  usuarioObservable(nome: string, email: string): Observable<Usuario> {
    return new Observable((subscriber) => {
      if (nome === 'Admin') {
        let usuario = new Usuario(nome, email);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 1000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 2000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 3000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 4000);

        setTimeout(() => {
          subscriber.complete();
        }, 5000);
      } else {
        subscriber.error('Ops! Deu erro !');
      }
    });
  }

  constructor() {}

  ngOnInit(): void {
    const oberver = {
      next: valor => console.log('Next: ', valor),
      error: valor => alert('Erro: ' + valor),
      complete: () => console.log('COMPLETE'),
    };

    const obs = this.usuarioObservable('Admin', 'admin@teste.com');
    const subs = obs.subscribe(oberver);

    setTimeout(() => {
      subs.unsubscribe();
      console.log('Conexão fechada: ' + subs.closed);
    }, 3500);


  }

  escrever(texto: string) {
    console.log(texto);
  }
}

export class Usuario {
  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
  nome: string;
  email: string;
}
