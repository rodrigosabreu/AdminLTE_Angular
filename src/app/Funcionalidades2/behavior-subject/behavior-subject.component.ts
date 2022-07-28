import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.sass']
})
export class BehaviorSubjectComponent implements OnInit {

  nomeBehaviorSubjectPai= new BehaviorSubject<string>("Objeto inicializado no componente pai");

  constructor() { }

  ngOnInit(): void {
  }

}
