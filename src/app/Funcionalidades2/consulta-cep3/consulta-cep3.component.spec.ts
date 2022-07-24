/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConsultaCep3Component } from './consulta-cep3.component';

describe('ConsultaCep3Component', () => {
  let component: ConsultaCep3Component;
  let fixture: ComponentFixture<ConsultaCep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaCep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
