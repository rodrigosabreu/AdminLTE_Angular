import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/models/endereco';

@Component({
  selector: 'app-consulta-cep3',
  templateUrl: './consulta-cep3.component.html',
  styleUrls: ['./consulta-cep3.component.sass']
})
export class ConsultaCep3Component implements OnInit {

  enderecoObj: Endereco;

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit() {
  }
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  GravarEndereco(event: Endereco)
  {
    this.enderecoObj = event;
    //alert(event.localidade);
  }

}
