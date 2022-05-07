import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  protected UrlServiceV1: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  obterMenus(): Observable<Menu[]>{

    return this.http.get<Menu[]>(this.UrlServiceV1 + "menus");

  }

}
