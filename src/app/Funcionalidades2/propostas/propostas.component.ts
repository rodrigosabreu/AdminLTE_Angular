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
  dtOptions: DataTables.Settings = {};
  public propostas: Proposta[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private listaPropostaService: ListaPropostasService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
    };

    this.listaPropostaService.obterPropostas().subscribe({
      next: (p) => {
        this.propostas = p;
        console.log(p);
        this.dtTrigger.next(this);
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
