import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoImobiComponent } from './simulacao-imobi.component';

describe('SimulacaoImobiComponent', () => {
  let component: SimulacaoImobiComponent;
  let fixture: ComponentFixture<SimulacaoImobiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulacaoImobiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulacaoImobiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
