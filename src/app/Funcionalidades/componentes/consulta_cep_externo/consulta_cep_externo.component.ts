import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Endereco } from 'src/app/models/endereco';
import { CepService } from 'src/app/Servicos/Cep/cep.service';

@Component({
  selector: 'app-consulta_cep_externo',
  templateUrl: './consulta_cep_externo.component.html',
  styleUrls: ['./consulta_cep_externo.component.sass']
})
export class Consulta_cep_externoComponent implements OnInit {

  txt_cep = new FormControl('08676250', [Validators.required]);




  //enviar dado para o Pai
  @Output() enviarParaOPaiEmit: EventEmitter<Endereco> = new EventEmitter();

  enderecoObj: Endereco;
  loading: boolean;


  constructor(
    private cepService: CepService,
    private cdref: ChangeDetectorRef
  ) {}

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngOnInit(): void {
    this.consultarCEP();
  }



  GravarEndereco(event: Endereco)
  {
    alert(event.localidade);
  }

  consultarCEP() {
    this.loading = true;
    setTimeout(() => {
      console.log("=======> Iniciando requisição de CEP")
      this.cepService.obterEndereco(this.txt_cep.value).subscribe({
        next: (result: Endereco) => {
          this.enderecoObj = result;
          this.enviarParaOPaiEmit.emit(this.enderecoObj);
          //console.log(this.enderecoObj);
        },
        error: (erro) => {
          this.loading = false;
          console.log('Erro consultar o CEP');
        },
        complete: () => {
          this.loading = false;
          console.log("=======> Requisição de CEP Completada")
        },
      });
    }, 1000);
  }

}
