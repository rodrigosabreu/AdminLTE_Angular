import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root',
})
export class MenusService {
  protected UrlServiceV1: string = 'http://localhost:3000/';
  header = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.header.set('Access-Control-Allow-Origin', '*');
  }

  obterMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.UrlServiceV1 + 'menus');
  }

  cadastrarMenu(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(this.UrlServiceV1 + 'menus', menu, {
      headers: this.header,
    });
  }
  atualizarMenu(menu: Menu): Observable<Menu> {
    //patch alterar parte do objeto
    //put alterar objeto completo
    return this.http.patch<Menu>(this.UrlServiceV1 + 'menus/' + menu.id, menu, {
      headers: this.header,
    });
  }
  deletarMenu(id: string): Observable<any> {
    return this.http.delete(this.UrlServiceV1 + 'menus/' + id, {
      headers: this.header,
    });
  }
}
