import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';
import { DisplayMessage, GenericValidator, ValidationMessages } from './generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';



@Component({
  selector: 'app-cad3',
  templateUrl: './cad3.component.html',
  styleUrls: ['./cad3.component.sass'],
})
export class Cad3Component implements OnInit, AfterViewInit {

  //obter colecao de elementos do formulario
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder) {

    this.validationMessages = {
      nome: {
        required: 'O Nome é requerido',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Nome precisa ter no máximo 150 caracteres'
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF em formato inválido'
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      senhaConfirmacao: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);

  }


  ngOnInit(): void {
    //let nome = new FormControl('');
    //this.cadastroForm = new FormGroup({//fazer ligacao do formGroup com o form no html

    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15])]);
    let senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15]), CustomValidators.equalTo(senha)]);

    this.cadastroForm = this.fb.group({
      nome:  ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      cpf:   ['', [<any>Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      senhaConfirmacao: senhaConfirm,
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




  ngAfterViewInit(): void {
    //criando colecao de observables para disparar em cada elemento no evento blur
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    //atribuindo as observables para cada elemento do form
    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
    });
  }


}
