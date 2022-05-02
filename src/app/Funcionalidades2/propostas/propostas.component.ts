import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Proposta } from 'src/app/models/proposta';
import { ListaPropostasService } from 'src/app/Servicos/Proposta/lista-propostas.service';

@Component({
  selector: 'app-propostas',
  templateUrl: './propostas.component.html',
  styleUrls: ['./propostas.component.css'],
})
export class PropostasComponent implements OnDestroy, OnInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;

  public propostas: Proposta[] = [];
  produtosSelect: string[] = [];
  statusDetalhadoSelect: string[] = [];

  //dtOptions: DataTables.Settings = {};
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private listaPropostaService: ListaPropostasService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      order: [[2, 'desc']],
      responsive: true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json',
      },
      dom: 'Blfrtip',
      buttons: [
        //'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
      ],
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
        this.obterProdutos();
        this.statusDetalhadoSelectProduto();
      },
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  buscarIdProposta(valor: any) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns(0).search(valor.value).draw();
    });
  }

  obterProdutos() {
    var produto: any = [];

    this.propostas.forEach((e) => {
      produto.push(e.produto);
    });

    this.produtosSelect = produto.filter(function (este: string, i: string) {
      return produto.indexOf(este) === i;
    });
    console.log(this.produtosSelect);
  }

  buscarProdutoProposta(valor: any) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      if (valor.value == 'todos') dtInstance.columns(7).search('').draw();
      else dtInstance.columns(7).search(valor.value).draw();
    });
  }
  statusDetalhadoSelectProduto() {
    var descricao_credito: any = [];
    this.propostas.forEach((data) => {
      descricao_credito.push(data.status.descricao_credito);
    });

    this.statusDetalhadoSelect = descricao_credito.filter(function (
      este: string,
      i: string
    ) {
      return descricao_credito.indexOf(este) === i;
    });
  }

  buscarStatusDetalhado(valor: any) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      if (valor.value == 'todos') dtInstance.columns(5).search('').draw();
      else dtInstance.columns(5).search(valor.value).draw();
    });
  }
}
