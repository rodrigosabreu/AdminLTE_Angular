import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AppService } from '../services/app-service.service';


@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.sass']
})
export class VisualizadorComponent implements OnInit, OnDestroy {
  @Input() nomeBehaviorSubject: BehaviorSubject<string>;
  nomeBehaviorSubjectSubscription: Subscription;
  nomeCount = 0;

  musicaSubscription: Subscription;
  musicaCount = 0;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.nomeBehaviorSubjectSubscription = this.nomeBehaviorSubject.subscribe(valor => {
      this.nomeCount++;
    });

    this.musicaSubscription = this.appService.obterMusica()
      .subscribe(valor => {
        this.musicaCount++;
      });
  }

  ngOnDestroy() {
    if (this.musicaSubscription)
      this.musicaSubscription.unsubscribe();

    if (this.nomeBehaviorSubjectSubscription)
      this.nomeBehaviorSubjectSubscription.unsubscribe();
  }

  get musica(): string {
    return this.appService.obterMusica().value;
  }
}
