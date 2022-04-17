import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoCgiComponent } from './simulacao-cgi.component';

describe('SimulacaoCgiComponent', () => {
  let component: SimulacaoCgiComponent;
  let fixture: ComponentFixture<SimulacaoCgiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulacaoCgiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoCgiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
