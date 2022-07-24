/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Consulta_cep_externoComponent } from './consulta_cep_externo.component';

describe('Consulta_cep_externoComponent', () => {
  let component: Consulta_cep_externoComponent;
  let fixture: ComponentFixture<Consulta_cep_externoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consulta_cep_externoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta_cep_externoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
