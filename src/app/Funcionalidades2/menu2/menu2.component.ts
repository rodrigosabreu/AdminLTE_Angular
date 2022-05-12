import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menu } from 'src/app/Servicos/Menu/menu';
import { MenusService } from 'src/app/Servicos/Menu/menus.service';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.sass'],
})
export class Menu2Component implements OnInit {
  _ADMIN: boolean = false;
  _EXACT: boolean = false;
  modal: boolean = false;
  idMenuClicado: string;

  menu: Menu;
  menuClicadoExcluir: Menu;
  menus: Menu[];
  menuForm: FormGroup;
  objMenuParaFilho: Menu;

  constructor(private fb: FormBuilder, private menuService: MenusService) {}

  ngOnInit(): void {
    this.popularTabela();

    this.menuForm = this.fb.group({
      name: ['', Validators.required],
      link: [''],
    });
  }

  carregarParaEdicao(menuClicado: Menu) {
    this.menu = menuClicado;
    this.idMenuClicado = menuClicado.id;
    console.log(menuClicado);
  }
  updateMenu(menu: Menu) {
    menu.id = this.idMenuClicado;

    this.menuService.atualizarMenu(menu).subscribe({
      next: (data) => {},
      error: (e) => {},
      complete: () => {
        this.popularTabela();
      },
    });
  }

  cadastrarMenu(menu: Menu) {
    menu.admin = this._ADMIN;
    menu.exact = this._EXACT;

    this.menuService.cadastrarMenu(menu).subscribe({
      next: (data) => {},
      error: (e) => {},
      complete: () => {
        this.popularTabela();
      },
    });
  }

  deletarMenu(menu:Menu) {


    this.menuService.deletarMenu(menu.id).subscribe({
      next: (data) => {},
      error: (e) => {},
      complete: () => {
        this.popularTabela();
      },
    });
  }

  popularTabela() {
    this.menuService.obterMenus().subscribe({
      next: (data) => {
        this.menus = data;
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        console.log('Requisição de propostas completada');
      },
    });
  }

  abriModalExcluir(menuClicado: Menu){
    this.menuClicadoExcluir = menuClicado;
  }

  abrirModal(menu: Menu){
    this.objMenuParaFilho = menu
    this.modal = true;
  }
}
