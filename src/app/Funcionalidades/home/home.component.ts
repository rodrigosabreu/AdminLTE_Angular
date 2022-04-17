import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  campo:any = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  funcao(recebe: any){
    this.campo = recebe
  }

}
