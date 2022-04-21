import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cad3Component } from './cad3.component';

describe('Cad3Component', () => {
  let component: Cad3Component;
  let fixture: ComponentFixture<Cad3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cad3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cad3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
