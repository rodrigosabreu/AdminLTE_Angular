import { Component } from '@angular/core';
import { Menu, Menus } from './Servicos/Menu/menu';
import { MenusService } from './Servicos/Menu/menus.service';



import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent {


  constructor(private menuService: MenusService) {}


  title = 'angular-admin-lte';

  menus: Menu[] = [];

  private timer;

  ngOnInit(): void {

    this.carregarMenu();

    interval(1000000000).subscribe(x => this.carregarMenu() );





  }

  carregarMenu(){
    setTimeout(() => {
      this.menuService.obterMenus()
      .subscribe({
        next: (data) => {
          this.menus = data.menus;
          console.log(data.menus);
        },
        error: (e) => {
          console.log(e);

        },
        complete: () => {
          console.log('Requisição de propostas completada');
        },
      });
    }, 1000);
  }

}
