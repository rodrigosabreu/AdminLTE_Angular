import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proposta } from 'src/app/models/proposta';


@Injectable({
  providedIn: 'root'
})
export class ListaPropostasService {

  protected UrlServiceV1: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  obterPropostas(): Observable<Proposta[]>{

    return this.http.get<Proposta[]>(this.UrlServiceV1 + "propostas");

  }
}
