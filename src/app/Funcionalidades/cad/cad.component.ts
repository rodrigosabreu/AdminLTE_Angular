import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cad',
  templateUrl: './cad.component.html',
  styleUrls: ['./cad.component.sass'],
})
export class CadComponent implements OnInit {
  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //let nome = new FormControl('');
    //this.cadastroForm = new FormGroup({//fazer ligacao do formGroup com o form no html

    this.cadastroForm = this.fb.group({
      nome:  ['', Validators.required],
      cpf:   ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      senhaConfirmacao: ['', Validators.required],
    });
  }

  adicionarUsuario() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
    }else{
      this.formResult = "Campos inválido";
    }
  }
}
