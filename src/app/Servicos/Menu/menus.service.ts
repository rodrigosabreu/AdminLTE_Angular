import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu, Menus } from './menu';

import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  protected UrlServiceV1: string = "https://9ij2fvt9v8.execute-api.us-east-1.amazonaws.com/ap1/menu"

  constructor(private http: HttpClient) { }

  obterMenus(): Observable<Menus>{

    return this.http.get<Menus>(this.UrlServiceV1);

  }

}
