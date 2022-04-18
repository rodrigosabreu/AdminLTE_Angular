import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cad',
  templateUrl: './cad.component.html',
  styleUrls: ['./cad.component.sass'],
})
export class CadComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario : Usuario;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //let nome = new FormControl('');
    //this.cadastroForm = new FormGroup({//fazer ligacao do formGroup com o form no html

    this.cadastroForm = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      senha: [''],
      senhaConfirmacao: ['']
    });

  }

  adicionarUsuario() {
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);

  }
}
