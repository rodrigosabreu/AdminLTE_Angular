import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Proposta } from 'src/app/models/proposta';
import { ListaPropostasService } from 'src/app/Servicos/Proposta/lista-propostas.service';

@Component({
  selector: 'app-propostas',
  templateUrl: './propostas.component.html',
  styleUrls: ['./propostas.component.css'],
})
export class PropostasComponent implements OnDestroy, OnInit {

  public propostas: Proposta[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private listaPropostaService: ListaPropostasService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      responsive: true,
      language: {
        "url" : "https://cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json"
      },

    };

    this.listaPropostaService.obterPropostas().subscribe({
      next: (p) => {
        this.propostas = p;
        console.log(p);
        this.dtTrigger.next(null);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        console.log('Requisição de propostas completada');
      },
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }




}
