import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cad2Component } from './cad2.component';

describe('Cad2Component', () => {
  let component: Cad2Component;
  let fixture: ComponentFixture<Cad2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cad2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
